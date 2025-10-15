import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  published: boolean;
  featured?: boolean;
}

interface BlogViewerProps {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack?: () => void;
}

export function BlogViewer({ post, open, onOpenChange, onBack }: BlogViewerProps) {
  if (!post) return null;

  // Simple markdown-to-HTML converter (basic implementation)
  const renderMarkdown = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 text-primary">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3 text-primary">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-2 text-primary">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br>')
      .replace(/^(.*)$/gm, '<p class="mb-4">$1</p>');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => {
                onBack && onBack();
                onOpenChange(false);
              }}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Posts
            </Button>
            <Button variant="ghost" onClick={handleShare}>
              <Share2 size={16} />
            </Button>
          </div>
          
          <div className="text-left space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{post.category}</Badge>
              {post.featured && <Badge variant="secondary">Featured</Badge>}
            </div>
            
            <DialogTitle className="text-3xl md:text-4xl text-primary leading-tight">
              {post.title}
            </DialogTitle>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <User size={14} />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </DialogHeader>

        <Card className="p-8 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ 
                __html: renderMarkdown(post.content) 
              }}
            />
          </motion.div>
          
          {/* Article Footer */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Written by</p>
                <p className="font-semibold text-primary">{post.author}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="font-semibold text-primary">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Content CTA */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-lg">
            <h4 className="text-lg font-semibold text-primary mb-2">Enjoyed this story?</h4>
            <p className="text-muted-foreground mb-4">
              Discover more stories from the Bantu Ants universe and join our travel community.
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Join Our Club
              </Button>
              <Button size="sm" variant="outline">
                More Stories
              </Button>
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}