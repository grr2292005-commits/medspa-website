import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || val.length >= 7,
      "Phone number must be at least 7 digits if provided"
    ),
  treatment: z
    .string()
    .min(1, "Please select a treatment")
    .trim(),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date (YYYY-MM-DD)"),
  time: z
    .string()
    .min(1, "Please select an appointment time")
    .trim(),
  message: z
    .string()
    .max(1000, "Notes cannot exceed 1000 characters")
    .optional(),
});

export type AppointmentSchemaType = z.infer<typeof appointmentSchema>;
