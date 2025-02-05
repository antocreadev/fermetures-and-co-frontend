interface FAQSectionProps {
  question: string;
  children: React.ReactNode;
}

export default function FAQSection({ question, children }: FAQSectionProps) {
  return (
    <details className="group border-b border-gray-200 py-4 w-[20rem]">
      <summary className="flex cursor-pointer items-center justify-between text-2xl font-bold">
        {question}
        <span className="transform transition-transform duration-200 group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="mt-4 space-y-4">{children}</div>
    </details>
  );
}
