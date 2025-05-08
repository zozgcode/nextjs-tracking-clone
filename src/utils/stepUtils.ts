import { Package } from "./types";

export const formatDatetime = (date?: string, time?: string): string | null => {
    return date && time ? `${date}T${time}` : null;
  };
  
  export const buildSteps = (pkg: Package, onHoldTimeReached: boolean) => {
    const steps = [
      {
        label: 'Package Received By FEDEX',
        datetime: formatDatetime(pkg.package_received_date, pkg.package_received_time),
      },
      {
        label: 'In Transit',
        datetime: formatDatetime(pkg.in_transit_date, pkg.in_transit_time),
      },
      {
        label: 'Out for Delivery',
        datetime: formatDatetime(pkg.out_for_delivery_date, pkg.out_for_delivery_time),
      },
    ];
  
    const hasOnHold = pkg.on_hold_date && pkg.on_hold_time;
    const onHoldStep = {
      label: 'On Hold',
      datetime: formatDatetime(pkg.on_hold_date, pkg.on_hold_time),
    };
  
    const deliveredStep = {
      label: 'Delivered',
      datetime: formatDatetime(pkg.estimated_delivery_date, pkg.estimated_delivery_time),
    };
  
    if (hasOnHold && onHoldTimeReached) {
      steps.push(onHoldStep);
      return steps;
    }
  
    if (hasOnHold) {
      steps.push(onHoldStep, deliveredStep);
      return steps;
    }
  
    steps.push(deliveredStep);
    return steps;
  };
  