'use client';
import Link from 'next/link';
import { toast } from 'sonner';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useEffect, useState, use, useRef } from 'react';
import { createEmailTemplate, getEmailTemplateBySlug, updateEmailTemplate } from '@/actions/email';
const TiptapEditor = dynamic(() => import('@/components/ui/TiptapEditor'), { ssr: false });

function EmailTemplateFormContent({ params }) {
  const router = useRouter();
  const { slug } = use(params);
  const slugInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ slug: '', subject: '', html: '', description: '' });

  useEffect(() => {
    if (slug === 'new') {
      setIsEditing(false);
      setLoading(false);
      setForm({ slug: '', subject: '', html: '', description: '' });

      if (slugInputRef.current) {
        slugInputRef.current.value = '';
      }
    } else {
      setIsEditing(true);
      fetchTemplate(slug);
    }
  }, [slug]);

  async function fetchTemplate(templateSlug) {
    setLoading(true);
    try {
      const template = await getEmailTemplateBySlug(templateSlug);
      if (template) {
        setForm({
          slug: template.slug,
          subject: template.subject,
          html: template.html,
          description: template.description || '',
        });
      } else {
        toast.error(`Template "${templateSlug}" not found.`);
        router.push('/admin/email');
      }
    } catch (err) {
      console.error('Failed to fetch template for editing:', err);
      toast.error(`Failed to load template: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleHtmlChange(value) {
    setForm((prev) => ({ ...prev, html: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isEditing && form.slug.toLowerCase() === 'new') {
      toast.error(`The slug "new" is reserved and cannot be used for a template.`);
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));

    try {
      if (isEditing) {
        await updateEmailTemplate(slug, formData);
        toast.success('Template updated successfully!');
      } else {
        await createEmailTemplate(formData);
        toast.success('Template created successfully!');
        router.push(`/admin/email/${form.slug}`);
      }
      if (isEditing) fetchTemplate(slug);
    } catch (err) {
      console.error('Submission error:', err);
      toast.error(err.message);
    }
  }

  if (loading) {
    return <main className="p-8 space-y-8 max-w-6xl mx-auto text-center text-gray-400">Loading template data...</main>;
  }

  return (
    <main className="p-8 pt-16 space-y-8 min-h-screen max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-100">
          {isEditing ? `Edit Template: ${form.slug}` : 'Create New Email Template'}
        </h1>
        <Link href="/admin/email" passHref>
          <Button variant="outline">Back to List</Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 border border-gray-700 p-6 rounded-md bg-gray-800 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            ref={slugInputRef}
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug (e.g., welcome)"
            disabled={isEditing}
            required
            className="bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
          />
          <Input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
          />
        </div>
        <Input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description (admin only)"
          className="bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"
        />
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">Email HTML</label>
          <TiptapEditor content={form.html} onChange={handleHtmlChange} />
        </div>

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            {isEditing ? 'Update Template' : 'Create Template'}
          </Button>
          {isEditing && (
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/admin/email')}
              className="border-gray-600 text-gray-200 hover:bg-gray-700"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </main>
  );
}

export default function EmailTemplateFormPageWrapper({ params }) {
  return (
    <Suspense
      fallback={<main className="p-8 space-y-8 max-w-6xl mx-auto text-center text-gray-400">Loading form...</main>}
    >
      <EmailTemplateFormContent params={params} />
    </Suspense>
  );
}
