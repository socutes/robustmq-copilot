import { createLazyFileRoute } from "@tanstack/react-router";
import PlacementCenter from "@/features/placement-center";

export const Route = createLazyFileRoute("/_authenticated/placement-center/")({
  component: PlacementCenter,
});
