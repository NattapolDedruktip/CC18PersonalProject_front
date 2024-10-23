import React, { useEffect, useState } from "react";
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
import Resize from "react-image-file-resizer";
import { uploadPaymentSlip } from "../api/userImage";
import useAuthStore from "../stores/auth-store";
import { toast } from "react-toastify";

function UserCheckOutBooking({ booking, getBooking }) {
  const [imgPath, setImgPath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const token = useAuthStore((state) => state.token);

  const handleSubmit = async () => {
    if (!imgPath) {
      setError("Please upload a payment slip before submitting.");
      return;
    }
    if (!imgPath.type.startsWith("image/")) {
      toast.error(`File ${imgPath.name} is not a valid image.`);
      return;
    }

    Resize.imageFileResizer(
      imgPath,
      720,
      720,
      "JPEG",
      100,
      0,
      async (data) => {
        const form = {
          image: data,
          netSpend: booking.price,
          bookingId: booking.id,
        };

        setIsLoading(true);
        try {
          const resp = await uploadPaymentSlip(token, form);
          console.log(resp);
          toast.success("Upload Slip");
          setIsDialogOpen(false);
        } catch (err) {
          console.error(err);
          toast.error("Failed to upload payment slip.");
        } finally {
          setIsLoading(false);
        }
      },
      "base64"
    );

    await getBooking();
    setError("");
  };

  const handleConfirm = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsConfirmOpen(false);
    handleSubmit();
  };

  useEffect(() => {
    getBooking();
  }, [isDialogOpen]);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="border-4 bg-MyBg border-MainOrange text-MainOrange text-4xl font-bold font-bebas px-7 py-6 rounded-full tracking-widest hover:bg-MainOrange hover:text-InputText transition"
            variant="outline"
          >
            CHECK OUT
          </Button>
        </DialogTrigger>
        <DialogContent
          style={{ maxHeight: "80vh", overflowY: "auto" }} // Added scrolling here
        >
          <DialogHeader>
            <DialogTitle>Check out booking</DialogTitle>
            <DialogDescription>
              Upload the payment slip and Click submit when you're done.
            </DialogDescription>
            <div>
              <div>
                <input
                  type="file"
                  onChange={(e) => {
                    setImgPath(e.target.files[0]);
                    setError("");
                  }}
                />
                {imgPath && (
                  <img
                    className="max-w-96"
                    src={URL.createObjectURL(imgPath)}
                    alt="Payment slip preview"
                  />
                )}
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={handleConfirm}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "SUBMIT"}
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Submission</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit the payment slip?
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => setIsConfirmOpen(false)} variant="outline">
                Cancel
              </Button>
              <Button
                onClick={handleConfirmSubmit}
                className="bg-black text-white"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Confirm"}
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserCheckOutBooking;
