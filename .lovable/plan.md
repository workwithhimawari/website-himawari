

## Memperbesar Logo di Hero Section

Logo HIMAWARI di Hero saat ini menggunakan ukuran `w-48 h-48` (mobile) hingga `w-96 h-96` (desktop), yang masih terlihat kecil dibanding elemen teks besar seperti "HIMAWARI" dan tagline di bawahnya.

### Perubahan

**File: `src/components/Hero.tsx`**

Ubah ukuran logo agar lebih proporsional:

- Mobile: `w-48 h-48` --> `w-64 h-64`
- Small: `sm:w-64 sm:h-64` --> `sm:w-80 sm:h-80`
- Medium: `md:w-80 md:h-80` --> `md:w-[420px] md:h-[420px]`
- Large: `lg:w-96 lg:h-96` --> `lg:w-[500px] lg:h-[500px]`

Ini akan membuat logo jauh lebih dominan dan proporsional dengan heading "HIMAWARI" yang berukuran `text-9xl` di desktop.

