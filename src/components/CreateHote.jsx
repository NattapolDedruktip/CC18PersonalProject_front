import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useAuthStore from "../stores/auth-store";
import { createHote } from "../api/host";
import { toast } from "react-toastify";

function CreateHote({ setHoteList, actionHostGetAllHote, hoteList }) {
  const token = useAuthStore((state) => state.token);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    hotelName: "",
    hostContact: "",
    address: "",
    description: "",
  });

  // Reset form data when dialog is opened
  const resetForm = () => {
    setFormData({
      hotelName: "",
      hostContact: "",
      address: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    createHote(token, formData);
    toast.success("Create Hote Successfully!!");
    setIsOpen(false); // Close the dialog after saving
    await actionHostGetAllHote(token).then((data) => setHoteList(data));
  };
  console.log(hoteList);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) resetForm(); // Reset form when dialog is opened
      }}
    >
      <DialogTrigger asChild>
        <Button
          className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-7 py-6 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          variant="outline"
        >
          CREATE HOTE
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill Hote Detail to Create New Hote</DialogTitle>
          <DialogDescription>
            Fill in the information about your hote. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hotelName" className="text-right">
                HOTE NAME:
              </Label>
              <Input
                id="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hostContact" className="text-right">
                HOST'S CONTACT:
              </Label>
              <Input
                id="hostContact"
                value={formData.hostContact}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                ADDRESS:
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                DESCRIPTION:
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save Change</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateHote;
