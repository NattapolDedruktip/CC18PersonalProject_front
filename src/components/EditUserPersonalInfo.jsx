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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import React, { useState } from "react";

function EditUserPersonalInfo() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    paymentMethod: "",
  });

  const hdlOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSelectChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const hdlEditProfile = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="border-4 bg-MyBg border-MainOrange text-MainOrange text-3xl font-bold font-bebas px-7 py-6 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
          variant="outline"
        >
          EDIT PROFILE
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>EDIT PROFILE</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstName" className="text-right">
                FIRST NAME:
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={hdlOnChange}
                placeholder="Fill your first name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastName" className="text-right">
                LAST NAME:
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={hdlOnChange}
                placeholder="Fill your last name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email:
              </Label>
              <Input
                placeholder="Fill your Email"
                id="email"
                type="email"
                value={form.email}
                name="email"
                onChange={hdlOnChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dateOfBirth" className="text-right">
                Date of Birth (YYYY/MM/DD):
              </Label>
              <Input
                placeholder="YYYY/MM/DD"
                id="dateOfBirth"
                name="dateOfBirth"
                onChange={hdlOnChange}
                value={form.dateOfBirth}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gender" className="text-right">
                Gender:
              </Label>
              <div>
                <Select
                  name="gender"
                  value={form.gender}
                  onValueChange={(value) => hdlSelectChange("gender", value)}
                >
                  <SelectTrigger className="w-[340px]">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="MALE">MALE</SelectItem>
                      <SelectItem value="FEMALE">FEMALE</SelectItem>
                      <SelectItem value="ETC">ETC</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="paymentMethod" className="text-right">
                Payment Method:
              </Label>
              <div>
                <Select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onValueChange={(value) =>
                    hdlSelectChange("paymentMethod", value)
                  }
                >
                  <SelectTrigger className="w-[340px]">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Payment Method</SelectLabel>
                      <SelectItem value="CASH">CASH</SelectItem>
                      <SelectItem disabled value="CREDIT">
                        CREDIT (Not available)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={hdlEditProfile}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserPersonalInfo;
