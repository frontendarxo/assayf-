import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const validated = api.contact.create.input.parse(data);
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit message");
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Transmission Complete",
        description: "Your secure message has been routed to our team.",
        className: "bg-card border-primary/50 text-foreground",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "Please verify your connection and try again.",
        variant: "destructive",
      });
    }
  });
}
