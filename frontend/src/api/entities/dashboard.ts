import {z} from 'zod';


export const DashboardBarangSchema = z.object({
    item_id: z.string(),
    item_name: z.string(),
    category: z.string().nullable(),
    source: z.string().nullable(),
    serial_number: z.string().nullable(),
    certificate: z.string().nullable(),
    quantity_available: z.number().nullable(),
    unit_price: z.number().nullable(),
    total_value: z.number().nullable(),
    supplier_name:  z.string().nullable(),
    supplier_contact: z.string().nullable(),
    current_location: z.string().nullable(),
    date_maintenance: z.string().nullable(),
    date_of_acquisition: z.string().nullable(),
    expiration_date: z.string().nullable(),
    condition: z.string().nullable(),
    check_inventory_update: z.string().nullable(),
    group_division: z.string().nullable(),
    notes: z.string().nullable(),
    images: z.any().optional(), 
    inventory_files: z.any().optional(),
});

export const DashboardBarangResponse = z.object({
    message: z.string(),
    status: z.string(),
    data: z.array(DashboardBarangSchema)
});
export type DashboardBarangResponse = z.infer<typeof DashboardBarangResponse>;

export type DashboardBarangSchema = z.infer<typeof DashboardBarangSchema>;