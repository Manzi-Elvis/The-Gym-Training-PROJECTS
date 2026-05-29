"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setDemoAuth } from "@/lib/auth/demo-auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginInput) {
    console.log(values);
    setDemoAuth();
    toast.success("Signed in successfully.");
    router.push("/dashboard");
}

  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access your Zentry account.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>

          <Input
            type="email"
            placeholder="name@example.com"
            {...form.register("email")}
          />

          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>

          <Input
            type="password"
            placeholder="Enter your password"
            {...form.register("password")}
          />

          {form.formState.errors.password && (
            <p className="text-sm text-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-foreground hover:underline">
          Create one
        </Link>
      </p>
    </div>
  );
}