import swal from 'sweetalert2';

const Swal = {
    success: () => (
        swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Anda Berhasil Login!',
            showConfirmButton: false,
            timer: 1800
        })
    ),
    failed: (text) => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: `${text} !`,
        })
    ),
    uploadFailed: () => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Upload File gagal !',
        })
    ),
    wrongFileType: () => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Mohon unggah File dalam bentuk .zip',
        })
    ),
    fillAllForm: () => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Mohon lengkapi form pengisian data',
        })
    ),
    finishAllStep: () => (
        swal.fire({
            type: 'success',
            title: 'Selamat proses recruitment selesai...',
            text: 'Dokumen anda sudah lengkap !',
        })
    )
}

export default Swal