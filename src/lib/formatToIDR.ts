export default function formatToIDR(number: number) {
  return `Rp ${number.toLocaleString('id-ID')}`;
}