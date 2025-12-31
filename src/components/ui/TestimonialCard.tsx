import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string; // Optional image URL
}

export default function TestimonialCard({ content, author, role }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
      <Quote className="text-secondary/30 absolute top-6 left-6 w-10 h-10" />
      <div className="relative z-10 pt-6">
        <p className="text-gray-600 italic mb-6 leading-relaxed">
          "{content}"
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mr-3">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
