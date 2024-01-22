export default function Info({name, onClick}) {
  return (
    <div onClick={onClick}>{name}</div>
  );
}