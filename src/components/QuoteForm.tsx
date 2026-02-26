import { useState, useRef } from 'react';
import { Send, Upload, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  make: string;
  model: string;
  reg: string;
  postcode: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '', email: '', phone: '', make: '', model: '', reg: '', postcode: '', message: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles = Array.from(fileList).filter((f) =>
      ['image/jpeg', 'image/png', 'image/webp'].includes(f.type)
    );
    setFiles((prev) => [...prev, ...newFiles].slice(0, 10));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={36} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Quote Request Received!</h3>
        <p className="text-gray-400 max-w-md mb-6">
          Thank you {form.name}. We'll review your details and get back to you with your free quote as soon
          as possible — usually within a few hours during business hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); setFiles([]); }}
          className="text-red-400 hover:text-red-300 underline text-sm"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name *" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
        <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
        <Field label="Telephone *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="07xxx xxxxxx" required />
        <Field label="Vehicle Make *" name="make" value={form.make} onChange={handleChange} placeholder="e.g. Ford" required />
        <Field label="Vehicle Model *" name="model" value={form.model} onChange={handleChange} placeholder="e.g. Focus" required />
        <Field label="Registration Number *" name="reg" value={form.reg} onChange={handleChange} placeholder="e.g. AB12 CDE" required />
        <Field label="Your Postcode *" name="postcode" value={form.postcode} onChange={handleChange} placeholder="e.g. CT12 5AB" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Describe the Damage</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Brief description of the damage..."
          className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/20 transition-colors resize-none"
        />
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Damage Images <span className="text-gray-500 font-normal">(Optional – up to 10)</span>
        </label>
        <div
          className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
            dragging ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-white/20'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files); }}
          onClick={() => fileRef.current?.click()}
        >
          <input
            ref={fileRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <Upload size={24} className="mx-auto mb-2 text-gray-500" />
          <p className="text-gray-400 text-sm">
            Click or drag images here
          </p>
          <p className="text-gray-600 text-xs mt-1">JPG, PNG, WebP — Max 10 images</p>
        </div>
        {files.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {files.map((f, i) => (
              <span key={i} className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-lg flex items-center gap-1.5">
                {f.name}
                <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} className="text-gray-500 hover:text-red-400">✕</button>
              </span>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500">
        <strong className="text-gray-400">Privacy Notice:</strong> We'll use your details to provide a quote and arrange bookings.
        Your data is processed securely under UK GDPR and won't be shared or used for marketing.
      </p>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] active:scale-[0.99] text-base"
      >
        <Send size={16} />
        Get My Free Repair Quote
      </button>
    </form>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = 'text', required,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/20 transition-colors"
      />
    </div>
  );
}
