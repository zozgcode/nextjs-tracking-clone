import { Package } from "@/utils/types";

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'John Doe',
      address: '123 Main St, Springfield, IL, 62701',
      contact_number: '555-1234',
      email: 'sender@example.com',
    },
    recipient: {
      name: 'Jane Smith',
      address: '456 Elm St, Shelbyville, IL, 62565',
      contact_number: '555-5678',
      email: 'recipient@example.com',
    },
    tracking_number: 'Fedex/USA/24/0011111',
    package_details: {
      weight_kg: 2.5,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15,
      },
      packages: 'Books',
      value_usd: 50.0,
    },
    package_received_date: '2024-05-18',
    package_received_time: '04:00:00',
    in_transit_date: '2024-05-18',
    in_transit_time: '06:10:00',
    out_for_delivery_date: '2024-05-18',
    out_for_delivery_time: '06:10:00',
    estimated_delivery_date: '2024-05-18',
    estimated_delivery_time: '06:08:00',
  },
  {
    package_id: 'PKG002',
    sender: {
      name: 'Alice Johnson',
      address: '789 Oak St, Capital City, IL, 62702',
      contact_number: '555-9876',
      email: 'sender@example.com',
    },
    recipient: {
      name: 'Bob Brown',
      address: '321 Pine St, Ogdenville, IL, 62567',
      contact_number: '555-5432',
      email: 'recipient@example.com',
    },
    tracking_number: 'Fedex/USA/24/0011112',
    package_details: {
      weight_kg: 1.8,
      dimensions_cm: {
        length: 25,
        width: 15,
        height: 10,
      },
      packages: 'Electronics',
      mode: 'Road',
      value_usd: 200.0,
    },
    package_received_date: '2024-05-18',
    package_received_time: '04:00:00',
    in_transit_date: '2024-05-18',
    in_transit_time: '06:20:00',
    out_for_delivery_date: '2024-05-18',
    out_for_delivery_time: '06:20:00',
    estimated_delivery_date: '2024-05-18',
    estimated_delivery_time: '06:08:00',
  },
];
