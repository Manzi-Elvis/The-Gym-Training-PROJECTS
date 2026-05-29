type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function PageHeader({
  label,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}