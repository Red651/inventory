"use client"

import type React from "react"
import { useForm, type SubmitHandler, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { DashboardBarangSchema } from "@/api/entities/dashboard"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useRef, useState, useEffect } from "react"
import { Upload, ImageIcon, FileText } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"

// Enum untuk dropdown
const enumGroup = [
  "HSE",
  "IT",
  "Mud Containment",
  "Gyro",
  "Drilling",
  "Mud Logging",
  "Wireline",
  "Cementing",
  "Directional Drilling",
  "MWD",
  "LWD",
  "Drilling Fluids",
  "Well Testing",
  "Completion",
  "Well Services",
  "Well Intervention",
  "Well Stimulation",
  "Well Abandonment",
  "Well Decommissioning",
  "Well Construction",
]
const enumInventoryCondition = [
  "Baru",
  "Hilang",
  "Dalam Perbaikan",
  "Perlu Perbaikan",
  "Tidak Dapat Diperbaiki",
  "Perlu Beli Baru",
]
const enumSource = ["Local", "Import"]
const enumCategory = [
  "Equipment",
  "Consumable",
  "Spare Part",
  "Tool",
  "Chemical",
  "Material",
  "Service",
  "Software",
  "Hardware",
  "License",
  "Subscription",
  "Consulting",
  "Other",
]
const enumInventoryUpdate = ["Sesuai", "Tidak Sesuai", "Sedang Dicek", "Tidak Dapat Dicek", "Belum Dicek"]
const enumLocation = ["BP", "Warehouse", "Office"]

interface UpdateInventoryItemModalProps {
  initialData: DashboardBarangSchema
  onClose: () => void
  refetch: () => void
}

export function UpdateInventoryItemModal({ initialData, onClose, refetch }: UpdateInventoryItemModalProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)

  const { register, handleSubmit, setValue, control, watch, formState: { errors } } = useForm<
    DashboardBarangSchema & { images: FileList; inventory_files: FileList }
  >({
    resolver: zodResolver(DashboardBarangSchema),
    defaultValues: {
      ...initialData,
      images: undefined,
      inventory_files: undefined,
    },
  });

  const imageFile = watch("images")

  // Update image preview when file changes
  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(imageFile[0])
    } else {
      setImagePreview(null)
    }
  }, [imageFile])

  // Handle form submission
  const onSubmit: SubmitHandler<DashboardBarangSchema & { images: FileList; inventory_files: FileList }> = async (data) => {
    try {
      const formData = new FormData()

      // Append all form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (key === "images" && data.images[0]) {
          formData.append("images", data.images[0])
        } else if (key === "inventory_files" && data.inventory_files.length) {
          for (let i = 0; i < data.inventory_files.length; i++) {
            formData.append("inventory_files", data.inventory_files[i])
          }
        } else if (value !== undefined && value !== null) {
          formData.append(key, value.toString())
        }
      })

      const response = await axios.put(`http://localhost:3000/dashboard/update/${initialData.item_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (response.data.status === "success") {
        refetch()
        onClose()
      } else {
        setError(response.data.message || "Gagal memperbarui barang")
      }
    } catch (error) {
      console.error("Error updating barang:", error)
      setError("Gagal memperbarui barang")
    }
  }

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.pageY - (formContainerRef.current?.offsetTop || 0))
    setScrollTop(formContainerRef.current?.scrollTop || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const y = e.pageY - (formContainerRef.current?.offsetTop || 0)
    const walk = (y - startY) * 1
    if (formContainerRef.current) {
      formContainerRef.current.scrollTop = scrollTop - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={formContainerRef}
      className="max-h-[80vh] overflow-y-auto cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4" encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Upload */}
          <div className="md:col-span-2 border-2 border-dashed rounded-lg p-4 text-center">
            <Label className="block mb-2">Product Image</Label>
            <div className="flex flex-col items-center gap-2">
              {imagePreview ? (
                <div className="relative w-40 h-40 mx-auto mb-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-0 right-0 h-6 w-6 p-0"
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      setValue("images", undefined as any)
                      setImagePreview(null)
                    }}
                  >
                    X
                  </Button>
                </div>
              ) : (
                <div className="w-40 h-40 mx-auto mb-2 flex items-center justify-center bg-muted rounded-md">
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-12 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Upload Image</span>
                  </div>
                  <input type="file" className="hidden" accept="image/*" {...register("images")} />
                </label>
              </div>
            </div>
            {errors.images && <p className="text-red-500 text-sm mt-2">{String(errors.images.message)}</p>}
          </div>

          {/* Inventory Files Upload */}
          <div className="md:col-span-2 border-2 border-dashed rounded-lg p-4 text-center mb-4">
            <Label className="block mb-2">Inventory Files</Label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-12 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Upload Files</span>
                </div>
                <input type="file" className="hidden" multiple={true} accept=".pdf,.doc,.docx" {...register("inventory_files")} />
              </label>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Upload certificates, manuals, or other relevant documents
            </p>
            {errors.inventory_files && <p className="text-red-500 text-sm mt-2">{String(errors.inventory_files.message)}</p>}
          </div>

          <div>
            <Label className="py-1">Item ID</Label>
            <Input {...register("item_id")} disabled />
            {errors.item_id && <p className="text-red-500 text-sm">{errors.item_id.message}</p>}
          </div>
          <div>
            <Label className="py-1">Item Name</Label>
            <Input {...register("item_name")} />
            {errors.item_name && <p className="text-red-500 text-sm">{errors.item_name.message}</p>}
          </div>
          <div>
            <Label className="py-1">Category</Label>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumCategory.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>
          <div>
            <Label className="py-1">Source</Label>
            <Controller
              control={control}
              name="source"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumSource.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.source && <p className="text-red-500 text-sm">{errors.source.message}</p>}
          </div>
          <div>
            <Label className="py-1">Serial Number</Label>
            <Input {...register("serial_number")} />
            {errors.serial_number && <p className="text-red-500 text-sm">{errors.serial_number.message}</p>}
          </div>
          <div>
            <Label className="py-1">Certificate</Label>
            <Input {...register("certificate")} />
            {errors.certificate && <p className="text-red-500 text-sm">{errors.certificate.message}</p>}
          </div>
          <div>
            <Label className="py-1">Quantity Available</Label>
            <Input type="number" {...register("quantity_available", { valueAsNumber: true })} />
            {errors.quantity_available && <p className="text-red-500 text-sm">{errors.quantity_available.message}</p>}
          </div>
          <div>
            <Label className="py-1">Unit Price</Label>
            <Input type="number" step="any" {...register("unit_price", { valueAsNumber: true })} />
            {errors.unit_price && <p className="text-red-500 text-sm">{errors.unit_price.message}</p>}
          </div>
          <div>
            <Label className="py-1">Total Value</Label>
            <Input type="number" step="any" {...register("total_value", { valueAsNumber: true })} />
            {errors.total_value && <p className="text-red-500 text-sm">{errors.total_value.message}</p>}
          </div>
          <div>
            <Label className="py-1">Supplier Name</Label>
            <Input {...register("supplier_name")} />
            {errors.supplier_name && <p className="text-red-500 text-sm">{errors.supplier_name.message}</p>}
          </div>
          <div>
            <Label className="py-1">Supplier Contact</Label>
            <Input {...register("supplier_contact")} />
            {errors.supplier_contact && <p className="text-red-500 text-sm">{errors.supplier_contact.message}</p>}
          </div>
          <div>
            <Label className="py-1">Current Location</Label>
            <Controller
              control={control}
              name="current_location"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumLocation.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.current_location && <p className="text-red-500 text-sm">{errors.current_location.message}</p>}
          </div>
          <div>
            <Label className="py-1">Date Maintenance</Label>
            <Input type="date" {...register("date_maintenance")} />
            {errors.date_maintenance && <p className="text-red-500 text-sm">{errors.date_maintenance.message}</p>}
          </div>
          <div>
            <Label className="py-1">Date of Acquisition</Label>
            <Input type="date" {...register("date_of_acquisition")} />
            {errors.date_of_acquisition && <p className="text-red-500 text-sm">{errors.date_of_acquisition.message}</p>}
          </div>
          <div>
            <Label className="py-1">Expiration Date</Label>
            <Input type="date" {...register("expiration_date")} />
            {errors.expiration_date && <p className="text-red-500 text-sm">{errors.expiration_date.message}</p>}
          </div>
          <div>
            <Label className="py-1">Condition</Label>
            <Controller
              control={control}
              name="condition"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumInventoryCondition.map((condition) => (
                      <SelectItem key={condition} value={condition}>
                        {condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.condition && <p className="text-red-500 text-sm">{errors.condition.message}</p>}
          </div>
          <div>
            <Label className="py-1">Check Inventory Update</Label>
            <Controller
              control={control}
              name="check_inventory_update"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumInventoryUpdate.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.check_inventory_update && <p className="text-red-500 text-sm">{errors.check_inventory_update.message}</p>}
          </div>
          <div>
            <Label className="py-1">Group Division</Label>
            <Controller
              control={control}
              name="group_division"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select group" />
                  </SelectTrigger>
                  <SelectContent>
                    {enumGroup.map((group) => (
                      <SelectItem key={group} value={group}>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.group_division && <p className="text-red-500 text-sm">{errors.group_division.message}</p>}
          </div>
        </div>

        <div>
          <Label>Notes</Label>
          <Textarea {...register("notes")} />
          {errors.notes && <p className="text-red-500 text-sm">{errors.notes.message}</p>}
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="w-full">
            Update
          </Button>
          <Button type="button" variant="outline" className="w-full" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}