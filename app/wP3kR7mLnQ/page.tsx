import { DestinationView } from "@/components/DestinationView";
import { destinations } from "@/config/destinations";

export default function ParkMiejskiDestinationPage() {
  return <DestinationView destination={destinations.park} />;
}
