export const EXAMPLE_PATH = "cms-contentful";
export const CMS_NAME = "Contentful";
export const CMS_URL = "https://www.contentful.com";

/**
 * Contact info — single source of truth.
 * When these change, update ONLY this file. Everything references CONTACT.
 */
export const CONTACT = {
	email: "yugrealestate22@gmail.com",
	emailUrl: "mailto:yugrealestate22@gmail.com",

	phone: "+91 96868 35577",
	phoneUrl: "tel:+919686835577",

	// Base WhatsApp URL — ready to append `?text=<encoded>` via whatsappLink().
	whatsappNumber: "919686835577",
	whatsappUrl: "https://wa.me/919686835577",

	address: {
		line1: "123 Agri Tower, Farm Road",
		line2: "Bangalore, Karnataka 560001",
		full: "123 Agri Tower, Farm Road, Bangalore, Karnataka 560001",
	},

	hours: [
		{ day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
		{ day: "Saturday", time: "10:00 AM – 4:00 PM" },
		{ day: "Sunday", time: "Closed" },
	],
} as const;

/**
 * Build a WhatsApp URL with a pre-filled message.
 * Handles URL-encoding of the message so callers can pass plain strings.
 *
 * @example
 * whatsappLink("Hi, I'm interested in …")
 * // => "https://wa.me/919686835577?text=Hi%2C%20I'm%20interested%20in%20%E2%80%A6"
 */
export function whatsappLink(message?: string): string {
	if (!message) return CONTACT.whatsappUrl;
	return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
