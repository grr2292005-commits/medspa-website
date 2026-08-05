export interface AppointmentInput {
  fullName: string;
  email: string;
  phone?: string;
  treatment: string;
  date: string;
  time: string;
  message?: string;
}

export interface AppointmentRecord {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string | null;
  treatment: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
  status: string;
  email_sent: boolean;
  admin_notified: boolean;
  updated_at?: string | null;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  details?: Record<string, string[]>;
}
