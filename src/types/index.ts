// Laravel single resource wrapper
export interface ApiResponse<T> {
    data: T
}

// Laravel collection wrapper
export interface ApiCollection<T> {
    data: T[]
}

// Laravel validation error shape
export interface ApiError {
    message: string
    errors?: Record<string, string[]>
}

// ------------------------------------------------------------------ //
// Projects
// ------------------------------------------------------------------ //

export interface ProjectImage {
    path: string
    caption: string | null
    sort_order: number
}

export interface ProjectTimeline {
    title: string
    description: string
    occurred_at: string
}

export interface ProjectContributor {
    name: string
    role: string
    avatar: string | null
}

export interface Project {
    id: number
    title: string
    slug: string
    type: string
    brief: string
    stack: string[]
    cover_image_url: string | null
    earning: number
    is_maintained: boolean
    started_at: string | null
    ended_at: string | null
    // Only present on detail endpoint
    images?: ProjectImage[]
    timelines?: ProjectTimeline[]
    contributors?: ProjectContributor[]
}

// ------------------------------------------------------------------ //
// Services
// ------------------------------------------------------------------ //

export interface Service {
    id: number
    name: string
    type: string
    description: string
    includes: string[]
    price: number
    duration: string
    is_active: boolean
}

// ------------------------------------------------------------------ //
// Testimonials
// ------------------------------------------------------------------ //

export interface Testimonial {
    id: number
    client_name: string
    client_photo: string | null
    quote: string
}

// ------------------------------------------------------------------ //
// Contact
// ------------------------------------------------------------------ //

export interface ContactFormValues {
    from_name: string
    from_email: string
    from_phone?: string
    subject: string
    content: string
    honeypot?: string
    attachments?: File[]
}
