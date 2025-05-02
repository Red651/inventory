import {z} from 'zod';

export const createBarang = z.object({
    item_id: z.string(),
    item_name: z.string(),
    category: z.string(),
    source: z.string(),
    serial_number: z.string(),
    certificate: z.string(),
    quantity_available: z.number(),
    unit_price: z.number(),
    total_value: z.number(),
    supplier_name:  z.string(),
    supplier_contact: z.string(),
    current_location: z.string(),
    date_maintenance: z.date(),
    date_of_acquisition: z.date(),
    expiration_date: z.date(),
    condition: z.string(),
    check_inventory_update: z.string(),
    group_division: z.string(),
    notes: z.string()
});

export type CreateBarang = z.infer<typeof createBarang>;
