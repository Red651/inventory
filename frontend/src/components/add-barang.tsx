"use client"

import type React from "react"

import { useForm, type SubmitHandler, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import axios from "axios"
import type { DashboardBarangSchema } from "@/api/entities/dashboard"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useRef, useState, useEffect } from "react"
import { Upload, ImageIcon, FileText } from "lucide-react"

// enum category
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
  "Training",
  "Consulting",
  "Other",
]
const enumInventoryUpdate = ["Sesuai", "Tidak Sesuai", "Sedang Dicek", "Tidak Dapat Dicek", "Belum Dicek"]
const enumLocation = ["BP", "Warehouse", "Office"]

export function AddInventoryItemModal() {
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)

  const { register, handleSubmit, setValue, control, watch } = useForm<
    DashboardBarangSchema & { images: FileList; inventory_files: FileList }
  >()

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


  const onSubmit: SubmitHandler<DashboardBarangSchema & { images: FileList; inventory_files: FileList }> = (data) => {
    // Create FormData to handle file uploads
    const formData = new FormData()

    // Append all form fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images" && data.images[0]) {
        formData.append("images", data.images[0])
      } else if (key === "inventory_files" && data.inventory_files.length) {
        // Append multiple files if needed
        for (let i = 0; i < data.inventory_files.length; i++) {
          formData.append("inventory_files", data.inventory_files[i])
        }
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString())
      }
    })
    console.log(data)

    axios
      .post("http://localhost:3000/dashboard/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4" encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Upload  */}
          <div className="md:col-span-2 border-2 border-dashed rounded-lg p-4 text-center">
            <Label className="block mb-2">Product Image</Label>
            <div className="flex flex-col items-center gap-2">
              {imagePreview ? (
                <div className="relative w-40 h-40 mx-auto mb-2">
                  <img
                    src={imagePreview || "/placeholder.svg"}
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
                  <input type="file" className="hidden" accept="images/*" {...register("images")} />
                </label>
              </div>
            </div>
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
                <input type="file" className="hidden" multiple={true} {...register("inventory_files")} />
              </label>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Upload certificates, manuals, or other relevant documents
            </p>
          </div>

          <div>
            <Label className="py-1">Item Name</Label>
            <Input {...register("item_name")} />
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
          </div>
          <div>
            <Label className="py-1">Serial Number</Label>
            <Input {...register("serial_number")} />
          </div>
          <div>
            <Label className="py-1">Certificate</Label>
            <Input {...register("certificate")} />
          </div>
          <div>
            <Label className="py-1">Quantity Available</Label>
            <Input type="number" {...register("quantity_available", { valueAsNumber: true })} />
          </div>
          <div>
            <Label className="py-1">Unit Price</Label>
            <Input type="number" {...register("unit_price", { valueAsNumber: true })} />
          </div>
          <div>
            <Label className="py-1">Supplier Name</Label>
            <Input {...register("supplier_name")} />
          </div>
          <div>
            <Label className="py-1">Supplier Contact</Label>
            <Input {...register("supplier_contact")} />
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
          </div>
          <div>
            <Label className="py-1">Date Maintenance</Label>
            <Input type="date" {...register("date_maintenance", { valueAsDate: true })} />
          </div>
          <div>
            <Label className="py-1">Date of Acquisition</Label>
            <Input type="date" {...register("date_of_acquisition", { valueAsDate: true })} />
          </div>
          <div>
            <Label className="py-1">Expiration Date</Label>
            <Input type="date" {...register("expiration_date", { valueAsDate: true })} />
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
          </div>
        </div>

        <div>
          <Label>Notes</Label>
          <Textarea {...register("notes")} />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
