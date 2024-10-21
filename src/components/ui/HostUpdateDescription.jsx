import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { editHoteDescription } from "@/src/api/host";
import useAuthStore from "@/src/stores/auth-store";

function HostUpdateDescription({ id, getHoteInfoById, setHoteData, hoteData }) {
  const token = useAuthStore((state) => state.token);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Added to manage dialog state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setError("Description cannot be empty.");
      return; // prevent form submission
    }

    // Perform your form submission logic here (e.g., API call)
    console.log("Form submitted with description:", description);

    await editHoteDescription(token, description, id);
    await getHoteInfoById(token, id);

    // Clear the description and error after successful submission
    setDescription("");
    setError("");

    // Close the dialog after a successful save
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Button
          className="border-4 bg-MyBg border-MainOrange text-MainOrange text-xl font-bold font-bebas px-3 py-5 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          variant="outline"
          onClick={() => setIsDialogOpen(true)} // Open dialog when button is clicked
        >
          UPDATE
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your Hotel description</DialogTitle>
          <DialogDescription>
            Click save when you finish editing the description.
          </DialogDescription>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="description" className="text-right">
                Hotel Description:
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                required
              />
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>

            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default HostUpdateDescription;
