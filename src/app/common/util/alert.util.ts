declare var toastr: any;

/**
 * Alert(Toastr) 유틸
 */
export class Alert {

	/**
	 * Information Alert
	 */
	public static info(message: string): void {
		toastr.info(message);
	}

	/**
	 * Success Alert
	 */
	public static success(message: string): void {
		toastr.success(message);
	}

	/**
	 * Warning Alert
	 */
	public static warning(message: string): void {
		toastr.warning(message);
	}

	/**
	 * Error Alert
	 */
	public static error(message: string): void {
		toastr.error(message);
	}

}