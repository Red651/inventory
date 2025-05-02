import axios from "axios";
import { useState, useEffect } from "react";
import {DashboardBarangSchema, DashboardBarangResponse} from "../api/entities/dashboard";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";

const UpdateBarang: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [barang, setBarang] = useState<DashboardBarangResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<DashboardBarangSchema>({
    resolver: zodResolver(DashboardBarangSchema),
  });

  // Fetch data barang
  useEffect(() => {
    const fetchBarang = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/dashboard/read/${id}`);
        if (response.data.status === 'success') {
          const item = response.data.data;
          setBarang(item);
          // Set nilai form
          Object.keys(item).forEach((key) => {
            if (key !== 'images' && key !== 'inventory_files') {
              setValue(key as keyof DashboardBarangSchema, item[key]);
            }
          });
          setLoading(false);
        } else {
          setError(response.data.message);
          setLoading(false);
        }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError('Gagal mengambil data barang');
        console.error(error);
        setLoading(false);
      }
    };
    fetchBarang();
  }, [id, setValue]);

  // Handle submit form
  const onSubmit = async (data: DashboardBarangSchema) => {
    try {
      setLoading(true);
      const formData = new FormData();
      
      // Tambahkan data form
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'images' && key !== 'inventory_files') {
          formData.append(key, value === null ? '' : String(value));
        }
      });

      // Tambahkan file images
      if (data.images) {
        Array.from(data.images).forEach((file) => {
          formData.append('images', file as File);
        });
      }

      // Tambahkan file inventory_files
      if (data.inventory_files) {
        Array.from(data.inventory_files).forEach((file) => {
          formData.append('inventory_files', file as File);
        });
      }

      const response = await axios.put(`http://localhost:3000/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.status === 'success') {
        navigate('/dashboard-barang');
      } else {
        setError(response.data.message);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError('Gagal memperbarui data barang');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Memuat...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!barang) return <div className="text-center mt-10">Data tidak ditemukan</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Barang</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="item_id" className="mb-2">Item ID</label>
          <input
            type="text"
            id="item_id"
            {...register('item_id')}
            className="border p-2 rounded-md"
            disabled
          />
          {errors.item_id && <p className="text-red-500 text-sm">{errors.item_id.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="item_name" className="mb-2">Item Name</label>
          <input
            type="text"
            id="item_name"
            {...register('item_name')}
            className="border p-2 rounded-md"
          />
          {errors.item_name && <p className="text-red-500 text-sm">{errors.item_name.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="category" className="mb-2">Category</label>
          <input
            type="text"
            id="category"
            {...register('category')}
            className="border p-2 rounded-md"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="source" className="mb-2">Source</label>
          <input
            type="text"
            id="source"
            {...register('source')}
            className="border p-2 rounded-md"
          />
          {errors.source && <p className="text-red-500 text-sm">{errors.source.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="serial_number" className="mb-2">Serial Number</label>
          <input
            type="text"
            id="serial_number"
            {...register('serial_number')}
            className="border p-2 rounded-md"
          />
          {errors.serial_number && <p className="text-red-500 text-sm">{errors.serial_number.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="certificate" className="mb-2">Certificate</label>
          <input
            type="text"
            id="certificate"
            {...register('certificate')}
            className="border p-2 rounded-md"
          />
          {errors.certificate && <p className="text-red-500 text-sm">{errors.certificate.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="quantity_available" className="mb-2">Quantity Available</label>
          <input
            type="number"
            id="quantity_available"
            {...register('quantity_available', {
              setValueAs: (value) => (value === '' ? null : Number(value)),
            })}
            className="border p-2 rounded-md"
          />
          {errors.quantity_available && <p className="text-red-500 text-sm">{errors.quantity_available.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="unit_price" className="mb-2">Unit Price</label>
          <input
            type="number"
            step="any"
            id="unit_price"
            {...register('unit_price', {
              setValueAs: (value) => (value === '' ? null : Number(value)),
            })}
            className="border p-2 rounded-md"
          />
          {errors.unit_price && <p className="text-red-500 text-sm">{errors.unit_price.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="total_value" className="mb-2">Total Value</label>
          <input
            type="number"
            step="any"
            id="total_value"
            {...register('total_value', {
              setValueAs: (value) => (value === '' ? null : Number(value)),
            })}
            className="border p-2 rounded-md"
          />
          {errors.total_value && <p className="text-red-500 text-sm">{errors.total_value.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="supplier_name" className="mb-2">Supplier Name</label>
          <input
            type="text"
            id="supplier_name"
            {...register('supplier_name')}
            className="border p-2 rounded-md"
          />
          {errors.supplier_name && <p className="text-red-500 text-sm">{errors.supplier_name.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="supplier_contact" className="mb-2">Supplier Contact</label>
          <input
            type="text"
            id="supplier_contact"
            {...register('supplier_contact')}
            className="border p-2 rounded-md"
          />
          {errors.supplier_contact && <p className="text-red-500 text-sm">{errors.supplier_contact.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="current_location" className="mb-2">Current Location</label>
          <input
            type="text"
            id="current_location"
            {...register('current_location')}
            className="border p-2 rounded-md"
          />
          {errors.current_location && <p className="text-red-500 text-sm">{errors.current_location.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="date_maintenance" className="mb-2">Date Maintenance</label>
          <input
            type="date"
            id="date_maintenance"
            {...register('date_maintenance')}
            className="border p-2 rounded-md"
          />
          {errors.date_maintenance && <p className="text-red-500 text-sm">{errors.date_maintenance.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="date_of_acquisition" className="mb-2">Date of Acquisition</label>
          <input
            type="date"
            id="date_of_acquisition"
            {...register('date_of_acquisition')}
            className="border p-2 rounded-md"
          />
          {errors.date_of_acquisition && <p className="text-red-500 text-sm">{errors.date_of_acquisition.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="expiration_date" className="mb-2">Expiration Date</label>
          <input
            type="date"
            id="expiration_date"
            {...register('expiration_date')}
            className="border p-2 rounded-md"
          />
          {errors.expiration_date && <p className="text-red-500 text-sm">{errors.expiration_date.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="condition" className="mb-2">Condition</label>
          <input
            type="text"
            id="condition"
            {...register('condition')}
            className="border p-2 rounded-md"
          />
          {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="check_inventory_update" className="mb-2">Check Inventory Update</label>
          <input
            type="text"
            id="check_inventory_update"
            {...register('check_inventory_update')}
            className="border p-2 rounded-md"
          />
          {errors.check_inventory_update && <p className="text-red-500 text-sm">{errors.check_inventory_update.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="group_division" className="mb-2">Group Division</label>
          <input
            type="text"
            id="group_division"
            {...register('group_division')}
            className="border p-2 rounded-md"
          />
          {errors.group_division && <p className="text-red-500 text-sm">{errors.group_division.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="notes" className="mb-2">Notes</label>
          <textarea
            id="notes"
            {...register('notes')}
            className="border p-2 rounded-md"
          />
          {errors.notes && <p className="text-red-500 text-sm">{errors.notes.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="images" className="mb-2">Images (maks 5)</label>
          <input
            type="file"
            id="images"
            {...register('images')}
            multiple
            accept="image/*"
            className="border p-2 rounded-md"
          />
          {errors.images && <p className="text-red-500 text-sm">{errors.images.message}</p>}
          {barang.images.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">Gambar yang sudah ada:</p>
              <ul className="list-disc pl-5">
                {barang.images.map((img) => (
                  <li key={img.image_id}>{img.file_name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="inventory_files" className="mb-2">Inventory Files (maks 5)</label>
          <input
            type="file"
            id="inventory_files"
            {...register('inventory_files')}
            multiple
            accept=".pdf,.doc,.docx"
            className="border p-2 rounded-md"
          />
          {errors.inventory_files && <p className="text-red-500 text-sm">{String(errors.inventory_files.message)}</p>}
          {barang.inventory_files.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">File yang sudah ada:</p>
              <ul className="list-disc pl-5">
                {barang.inventory_files.map((file) => (
                  <li key={file.file_id}>{file.file_name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-blue-300"
          >
            {loading ? 'Menyimpan...' : 'Update'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard-barang')}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBarang;