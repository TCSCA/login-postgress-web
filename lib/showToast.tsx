import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

type IResponse = "success" | "error" | "warning" | "loading"

interface IInfo {
	type: IResponse
	message: string
}

export const showToast = (info: IInfo) => {
	let data = info.message.length > 70 ? `${info.message.substring(0, 70)}...` : info.message;
	let fontSize = "text-lg";
	if (info.type === "success")
		toast.success(data, {className: fontSize});
	if (info.type === "error")
		// toast.custom((id) => (<Toaster position="bottom-right" className="![--width:340px]" />))
		toast.error(data, {className: fontSize});
	if (info.type === "warning")
		toast.message(data, {className: fontSize});
	if (info.type === "loading")
		toast.loading(data, {className: fontSize});
};


export const dismissToast = () => {
	toast.dismiss()
}