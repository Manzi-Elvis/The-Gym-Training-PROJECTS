export function DashboardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  );
}