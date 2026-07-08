import type { UserRole } from "@/context/AuthContext";

export function getRouteByRole(role: UserRole) {
  if (role === "driver") {
    return "/landing/driver";
  }
  if (role === "vendor") {
    return "/landing/dashboard";
  }
  return "/landing/shop";
}
