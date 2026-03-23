import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto bg-destructive/10 text-destructive rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12" />
          </div>
          <h1 className="font-display font-black text-5xl text-foreground mb-4">Oops! 404</h1>
          <p className="text-lg text-muted-foreground font-medium mb-8">
            We looked everywhere, but we couldn't find the page you're looking for. Maybe it floated away into space? 🚀
          </p>
          <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
            Take Me Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
