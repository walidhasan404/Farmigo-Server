const imageUrls: string[] = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis5sLJzssFCl4KIiq4ELnnRjZlX3PNBthnevOQHD635FWdtm4_SLomDImYkCD61p7n6EOZgBDQvgliujZ9-S22-PbYwPOa_5OCsIh_dT-vEosfmePAxqDoq9xGbK488QDjdfNAvS8PM7fT1i8hmRxdSegx3Lw1OV3JqsPJMoAU4wAY9G6AmhKfnoCc3iE/s256/letter-a%20(1).png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-USyTYpFw3Zy7T4QcEUR05HTWlL8GspPgwvFwY-LMSliPI67Wju_O9pDyIP5MyTXBYpzA2EpPs_kp_xB9OPYLVxzN4xaXBqSZGCH0LjBo-CPoF1zEcRgN8hUMqbCTNusGRS5Wg1ogTIo71c3ly7afyjHV_q4B96NwfrDiof72jNx7ncNtXVM-I5iaAMo/s256/letter-b.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWdRMeRnApDZluIfaPltGZxSaDbHwhAUKhYu24dbw5GmCSpY9Pujq_ka7_i4RRSBX3_ydIeubWDnBRT6mZO5uIsE4J0MjXTcR_tVHs5TELqnqh9SrGkhPNV8olcX3RuexqycT4JBMBH-OvAdWXxFzEK_zkDqhivQtafQKRIzg3F_2eQ7FFCXAJRM7D2SA/s256/letter-c%20(1).png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjO8fPbvyCFVg1N-bAdN-cvL5dDbewbYSbGco8qAzmt_YEsRmZdCq-d90-iRFkieR8BsJqpbsviMZCP_aJRsn8NRftRHdgzMECV2PiwZOzgNYV7PGDJuf65jyG8jjuUQLv-fY41B8awtXXjYs2oBem6G-PqCWV8naSQAqOsVo23nez0KTQxeD5cFL6RIc/s256/letter-d%20(1).png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz95h1V5qZq6LqOPOsAH0o0fd9fPmuXlmt5WbPWXD1RKKXPGKfTozFe9t_UFvy8I-viRm1tkSJQ_oGVyo4AGhTW8SKUofJ5Je3P-XtLSHdNJYnLlTnNIBUzIgcOM2zaJD693Qxsd6Jiib257z6QOHNCx-k2L9lU-e7Is0S9c7y0lP72XhaV0spwgl7E-Q/s256/letter-e%20(1).png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6cI3WicCDW1GDDgOULAAdArs06ne7DU3D0jGMLnxPlrzFsobbGnJtDipeHx9rVmWewsbMRXsFZT8XJbLyo2YbrIifuGkonpVQPzed1FcOXWcEbecWHlWvMNOTMbv2SMyPDUjPbr8jHqxV-xRKGxryaml0PpnS8SR_X4om6NssKoTcm0XMek9ssCrViys/s256/letter-f.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWZd2r8iI_0j3Je3kTkh6qQtwHeKNX_ayHXG7es1tMZ-z6Vff1V8HmYMy2A7JyxNn7l_FT4Bu8dCXsXK3LqHUUr_ytxHhhl6G8w8fFuYHFkLax5UMI-mQN71o-Cb0dlX-kKDayt68zCB2tM6-3Wj6iwHmwdF6Ol7iGFEX8yrwj_3K-p5mMj05lP1lzOYc/s256/letter-g.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf7zz0LlXhc1GhFmldafO8wsX9AeQp6kiJM0UxFzPsSoa3SogkmI3rnGFXRy4vkfFmnv39rI5ANv0Vfz-kqZ0lGc4mH9yKwyOvppJrIiY-UyUAeF9zYBY4DqjkOO6sqVJEmNk6w1zC9H1vDGFS5NkCSDysAjADAxIkmUM8Y_JcHPyJ1zokXykaSK36Eio/s256/letter-h.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4_4TtqNOnrU1Gsiowk4jf-L_LbdocAFgsUFpYavubDMrkmHYWScDJaXquoUDBYgxQrqLVdfmZvg0eATf6ob9G8ItiuWkdCuRQyDNkVZ9H4vURbkMVHfLt3T4Aatjp80uKLLi2d7KIWciw56336b4b-LWAkjQA9x82MsWrE_-wJS9n5mZfwC-hNZwldnk/s256/letter-i%20(2).png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHTsWSfoXf4veu7kkHbjdVKe6luGNOcI-VLf8InKw79Wn_DMKxOCB6ItEuS1qFk-lUFHQ8idHqlwjj3i5pYnGHFMFkX4w-WI0A7wWXBV7dN7rVVbamCZ-9SmJZVBh1oGu52V4RwR4cbEnW7746hzJqxFZqG2QY3gCWejJC4e7o1BM74uNSBjZXimlfAL0/s256/letter-j.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDulNFI2NZCa8d75_qDtBR9ptpcRE6xBMEMbzVVJx0HaZz2-eqES_ItCb2WzqPvU5_QKOoWY1r1_vey0Ct_7eJk_XI4hM0lAT7GnSIvWYZsvmEQ-NWo6LQSiwTtLb3SXleSsspBzBVRHSkfcq6_No9hNsTrlK6S7NXjFhz18KnKIJorf9WWwpsgWKm1jM/s256/letter-k.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3uymdkS-lF-c4MahpkPioB9uF9HXG0BslgLlTDX-xxFeYItOWYmMyjjBesvyfu8vLz1bo0SqLNLmcHn2455GiI8nt2E_TSxGRuWbBx8r1AIc2_Xa8nS0uiasVZFKvgzXNFoCjFPLOyA7KeZhD56fpUIcfAsrt4-6J0dFR4lexuMHDIF0uHUP4Z95dIHM/s256/letter-l.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSgwU7OD3qmMikfhXymEJjJKq9eDsEaoXMiGxrV6Bt7zRWTMIL1gM7Rd7k8tP5C5GoPGGxjfu_RZoKWyv8bHYxuBgyXeYNluX_3PoppaFE34jk3WJDs8QBr6f6UGRu-2SgvOITXXrNVzBek3la09uasu8EDF2_JknJgmtd6i-mSF5DJtbIp_BDCL-0HIQ/s256/letter-m.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjapBO0Efu9y1KpJ347Ey-cXzKJIP3aiaDuMDP33EhDFztzZXfLN8Zk4nduMRptLw1RE2Am6iL8Q_YUmV42xQc-M8PE5hqdJ_Er6a4L5uUdrGSqApoEX106aV3ZJ-Ngi1REnKIHbL4Dlop7E3k37S4jp20KKecGnSDYnNM0QWNdsKc9IGR26Cu3U1iaf-g/s256/letter-n.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9AeloIILf4wDrbAq6BI5YB-wL6UC2D678nQxOSJg4Nq-lbM86kEUXKxCBycMVL6diDQloOAEcoXikj3c541Fdn4ldUmIY1p7_nUgrDl-eDyK2bM_FzrNzoN-vesjadB76JmFjFoYJTr5T61PuvMdovKfhYZHL5H0PgeXBBtrBpTYHKIFILr2VfyKEYmQ/s256/letter-o.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25X-d0w-wOf1WKdy1Iib2VNN1M4UDnADMeW4-DpGxXH4Uc03GSPCWpdAaxc75N16KdCbgkSkTr1eVBNH6vOQ9cG2fgX3zSmvfc6JO6XuNTNUgolUzphWJI8Xkccltkp5nqnpenOEM6HxQtFKESihV-nIgZy67FcSBL8E9T-rWta5MDC_ShHBiSAL9Nb8/s256/letter-p.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqlX12SjAEnUAZ36aLVe-g5uoxXGQk-GAOxVipVOGaPs37lb__GGXz91jxjG-dbaMN9MKzbZOFY8tmgPISMcnII50NZUFk_Z-rJ97XkM9AzL44Xyb60VwVin1ZS6zOiAMVHaoMimQDF-xtvH20brmH1V3XTy7gPoZwbwV6gBDqMKd0BpdGMYALY0O2K2M/s256/letter-q.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDmsXRtmCzkAtA1bVsr_iWNwPXgkwlZEr92nJ8E4S_cVuEQO5NUkFkSgc6XSinUJ9lL8cigjqZNkvntqH11_UmJ3w5wm8_qpJsP7-RUTuCrnvanBarT8Co5OE1ol8x3mUOmZis0KOdtPAhAIF4nWhTKULdidMkj7zxD00lHMikZyrDE4xGiDw-yzqLSkg/s256/letter-r.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzBxIcRfVWHd31Xs6u0pmuECQkW5qftHcDWvDhDRrzgPzS_9T-Ur0y-4JvZPbRqNJmM2SKNWGOk3UvOWL-E1fd9cOFJsi7YT6MMHvvQqJSlfDqG_LHb1EHMc2KiRdutmZIo_rOK8K4COhXCgeCVvv_3JdcUez49t6riGiMoG_BTeMf33Wjie_qj9A27Pw/s256/letter-s.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhczw9lTCBIgjHARG6b8N-IlaazzDIbG6oyYOh8_0mmjmH_XLxoKT92m_pB5yiFnue3IoQDx7q3WT_qxvyYwZgR3VNI9d4yfj1URQ1BXh6Lh4RS6T-_89e1cPJjsVeW8InjyyiJQ_GzC9Aqb6U1zO73pZ3ojgJNaro1ER2x9Hgwogwm9BbGaDc-rMPBwpA/s256/letter-t.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhul8DCP87wi11xjQDK1a_Vj6YsGOJlcjH4M_TbNOnbOSK8Y55j6eIoTqiOmIJGAmY_cLsKNJHbAImn5UR5Hoc-_vdTiqGPkFcekZoASNaHrUMGiG8w_kitRtkmFm4NrIPB5IyhvRfkbmE0KuLYvlygHasRu427TuECfeZesOiVXnp9uXJMU5lmOdhKNXk/s256/letter-u.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOhLmdKLGLpky8s47Tbk14WI294RD4Sdyc0RkM-7eS7bIYu__NZOutIoRQlqydBGhWGFq8p2YPFGkA1LOjFmkj9-6bLSHxtb3y2YJ7-IUhyphenhyphenNAESZf0m5cfdie8x2kovaBd5rkz_98Vbz9XxF0SQiuFREqassuttteelrs2wZOSh0VvBmnw2lfJVRgu_Rc/s256/letter-v.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOrVVrXuoPIe_aRHag8vZt3wBwSsBBhp5HfTj6l6IHhd7JmfSPEDHsUghFRJ_svIeZcA6fUXtXBp9mS1lq-7ZLnTFvu0rpz3-WJvMt-XgV77EzZnRJhFuil7KjmnZv7w_blHrPH38imehy1Ei1vcVV6Xj95ABR5arc8FcpA7YBBrUBnkCj1IMb7LrMtYk/s128/letter-w.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3Em-hsB1v1C5gtyCc0aedXBltykebqyRfZ9GIfTkqFK_mSSvy9HZTZY5gqdGnxlz47b5p6WdC2ewlssjU-HgKgRmyFumCeJepGh20t72jyQVEXJZ7SyZnCEbrhj07V1lXIuci7hSOdHFVYT_RCGPiVqJQ7_i6zc_rqNYvW4jH9vd8z9wDFTItLZgXQZc/s256/letter-x.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8FQ5C2VMgqFJFRxswSgzyYuSB84Jb8CjmXSy-YAPmCvASFw52sEn2H50nUAk3BAXqcOzKNwmSRcMYK6ebzVXW3q3J-eqEboEabuxtE-ehXMV2JEFdD3yuX0N8Xje5OE4mbWJxI5ZLbYNqX24rtQhZDpMgunmH3-QLOcjKCGb8RgtKc0nNdLuNoNQLC2s/s256/letter-y.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiq6cWeTl2xALbu2ALfckG9Sxu0yLl4WrwP70110Zgwxn_NN6gWpmPCuhpwD2avC_BMcUlqdbW9gXgIpUlFwaRwLOKAymrNxONvPL9sp9zHHX3R_hTuCGfVpmUcJmJcPQDqBIom8WtafIVbwsQtESVb5E5fpwxuQ8cneFsdApWSc6e1tJOqS8eOl1qWeJE/s256/letter-z.png"

  ];


  
  // Function to randomly return an image URL
  export default function getRandomImageUrl(username: string): string {
     const userChar = username.charAt(0).toUpperCase()
    
     switch (userChar) {
      case 'A':
            return imageUrls[0];
        case 'B':
            return imageUrls[1];
        case 'C':
            return imageUrls[2];
        case 'D':
            return imageUrls[3];
        case 'E':
            return imageUrls[4];
        case 'F':
            return imageUrls[5];
        case 'G':
            return imageUrls[6];
        case 'H':
            return imageUrls[7];
        case 'I':
            return imageUrls[8];
        case 'J':
            return imageUrls[9];
        case 'K':
            return imageUrls[10];
        case 'L':
            return imageUrls[11];
        case 'M':
            return imageUrls[12];
        case 'N':
            return imageUrls[13];
        case 'O':
            return imageUrls[14];
        case 'P':
            return imageUrls[15];
        case 'Q':
            return imageUrls[16];
        case 'R':
            return imageUrls[17];
        case 'S':
            return imageUrls[18];
        case 'T':
            return imageUrls[19];
        case 'U':
            return imageUrls[20];
        case 'V':
            return imageUrls[21];
        case 'W':
            return imageUrls[22];
        case 'X':
            return imageUrls[23];
        case 'Y':
            return imageUrls[24];
        case 'Z':
            return imageUrls[25];
        default:
            return 'Avatar';
     }
     
  }