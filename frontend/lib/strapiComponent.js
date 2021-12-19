export function convertNameToComponent(name) {
  return name
    .toLowerCase()
    .split(".")
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join("")
}
