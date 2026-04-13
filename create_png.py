import struct
import zlib

def make_png(r, g, b, a):
    # 1x1 PNG format
    PNG_MAGIC = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    # width=1, height=1, bit depth=8, color type=6 (RGBA), compress=0, filter=0, interlace=0
    ihdr_data = struct.pack("!IIBBBBB", 1, 1, 8, 6, 0, 0, 0)
    ihdr_crc = zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff
    ihdr = struct.pack("!I4s", len(ihdr_data), b'IHDR') + ihdr_data + struct.pack("!I", ihdr_crc)
    
    # IDAT chunk
    # Scanline: filter type 0 (None) followed by 1 pixel of RGBA
    idat_data = zlib.compress(b'\x00' + bytes([r, g, b, a]))
    idat_crc = zlib.crc32(b'IDAT' + idat_data) & 0xffffffff
    idat = struct.pack("!I4s", len(idat_data), b'IDAT') + idat_data + struct.pack("!I", idat_crc)
    
    # IEND chunk
    iend_data = b''
    iend_crc = zlib.crc32(b'IEND' + iend_data) & 0xffffffff
    iend = struct.pack("!I4s", len(iend_data), b'IEND') + iend_data + struct.pack("!I", iend_crc)
    
    return PNG_MAGIC + ihdr + idat + iend

if __name__ == '__main__':
    with open('assets/css/images/overlay1.png', 'wb') as f:
        f.write(make_png(0, 121, 50, 127))

