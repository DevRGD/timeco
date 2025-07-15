'use client';
import Link from 'next/link';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import EmailContent from '@/components/cards/EmailContent';
import { getAllEmailTemplates, deleteEmailTemplate } from '@/actions/email';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  async function fetchTemplates() {
    setLoading(true);
    try {
      const res = await getAllEmailTemplates();
      setTemplates(res);
    } catch (err) {
      console.error('Failed to fetch email templates:', err);
      toast.error('Failed to load email templates. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(slug) {
    const result = await Swal.fire({
      title: `Delete "${slug}"?`,
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#6b7280',
    });

    if (result.isConfirmed) {
      try {
        await deleteEmailTemplate(slug);
        toast.success(`Template "${slug}" deleted successfully!`);
        fetchTemplates();
      } catch (err) {
        console.error('Failed to delete email template:', err);
        toast.error(`Failed to delete template "${slug}": ${err.message}`);
      }
    }
  }

  return (
    <main className="p-8 pt-16 min-h-screen space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100">Manage Email Templates</h1>
        <Link href="/admin/email/new" passHref>
          <Button>Create New Template</Button>
        </Link>
      </div>

      {loading && <p className="text-gray-400 text-center">Loading templates...</p>}

      {!loading && templates.length === 0 && (
        <p className="text-gray-400 text-center">No email templates found. Create one!</p>
      )}

      <div className="grid gap-6">
        {templates.map((tpl) => (
          <div
            key={tpl.slug}
            className="border border-gray-700 rounded-md p-4 bg-gray-800 shadow-lg transition-transform hover:scale-[1.005]"
          >
            <EmailContent>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-blue-400">{tpl.slug}</h2>
                  <p className="text-gray-300 text-sm">{tpl.subject}</p>
                  {tpl.description && <p className="text-sm italic text-gray-400 mt-1">{tpl.description}</p>}
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/email/${tpl.slug}`} passHref>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </Link>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(tpl.slug)}>
                    Delete
                  </Button>
                </div>
              </div>
            </EmailContent>
          </div>
        ))}
      </div>
    </main>
  );
}
