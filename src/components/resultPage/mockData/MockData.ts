import { Package } from '@/utils/types';

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'John Doe',
      address: '123 Main St, Springfield, IL, 62701',
      contact_number: '555-1234',
      email: 'sender@example.com'
    },
    recipient: {
      name: 'Jane Smith',
      address: '456 Elm St, Shelbyville, IL, 62565',
      contact_number: '555-5678',
      email: 'recipient@example.com'
    },
    tracking_number: 'Fedex/USA/24/0011111',
    package_details: {
      weight_kg: 2.5,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Books',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Springfield, IL',
      destination: 'Shelbyville, IL',
      comment: 'Handle with care',
      mode: 'Road',
      value_usd: 50.0
    },
    package_received_date: '2024-05-23',
    package_received_time: '06:09:00',
    in_transit_date: '2024-05-23',
    in_transit_time: '06:10:00',
    out_for_delivery_date: '2024-05-23',
    out_for_delivery_time: '06:11:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-05-23',
    estimated_delivery_time: '06:13:00'
  },
  {
    package_id: 'PKG002',
    sender: {
      name: 'James Hollet',
      address: 'California Department',
      contact_number: '304-303-9843',
      email: 'jameshollet500@gmail.com'
    },
    recipient: {
      name: 'Brent M. McKinney',
      address: '31836 SW Country View Lane Wilsonville Oregon',
      contact_number: '505****',
      email: '*****'
    },
    tracking_number: 'Fedex/USA/24/0025631',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'California Department',
      destination: 'Wilsonville OR',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-07-26',
    package_received_time: '09:30:00',
    in_transit_date: '2024-07-26',
    in_transit_time: '09:40:00',
    out_for_delivery_date: '2024-08-27',
    out_for_delivery_time: '10:00:00',
    on_hold_date: '2024-08-27',
    on_hold_time: '18:30:00',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG003',
    sender: {
      name: 'Royal Dubai Jewelries',
      address: '7146 gaya ground sport city rd',
      contact_number: '975-***-****',
      email: 'jonathanmarshfred@gmail.com'
    },
    recipient: {
      name: 'Jonathan Marsh',
      address: '2053 Rising Hill Dr, Norman, OK, 73071',
      contact_number: '989-***-****',
      email: 'jonathanmarshfred@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025632',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gold',
      quantity: '1',
      paymentMode: 'Wire',
      origin: 'Dubai',
      destination: 'Oklahoma ',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-08-03',
    package_received_time: '12:00:00',
    in_transit_date: '2024-08-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-08-22',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-08-24',
    estimated_delivery_time: '12:00:00',
    pickup_date: '2024-08-24',
    pickup_time: '15:00:00'
  },
  {
    package_id: 'PKG004',
    sender: {
      name: 'Cindy Wheeler',
      address: 'California',
      contact_number: '+1 (740) 552‑3830',
      email: 'cindywheeler610@gmail.com'
    },
    recipient: {
      name: 'Ricardo Ivan Mercado',
      address: '4 Rue Pierre Brossoleite Appartement 3, 76770 Malauna. Rouen Francia',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025633',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Consignment Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'California',
      destination: 'Decatur,Ga',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-08-03',
    package_received_time: '12:00:00',
    in_transit_date: '2024-08-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-08-22',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '2024-09-20',
    on_hold_time: '09:00:00',
    on_hold_desc: 'Votre colis est bien arrivé en France et vous le fera livrer à votre adresse à Paris Vous devrez déposer 800 au FMI pour que le paquet puisse vous être remis.',
    estimated_delivery_date: '',
    estimated_delivery_time: '',
    pickup_date: '2024-09-27',
    pickup_time: '15:00:00'
  },
  {
    package_id: 'PKG005',
    sender: {
      name: 'Mark Sharon',
      address: '519 Mcmillian Iota Apt 17 70503',
      contact_number: '+1 (760)-377-6613',
      email: 'richardmattew@gmail.com'
    },
    recipient: {
      name: 'Terrance Lenney',
      address: '19101 Maries Road 530 Rolla, MO 65401',
      contact_number: '***-***-****',
      email: 'elizabirthwilliams92@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025634',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Texas',
      destination: 'Missouri',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-09-16',
    package_received_time: '12:00:00',
    in_transit_date: '2024-09-21',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2024-09-30',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-10-02',
    estimated_delivery_time: '09:00:00',
    pickup_date: '2024-10-03',
    pickup_time: '8:30:00'
  },
  {
    package_id: 'PKG006',
    sender: {
      name: 'Susan Queen',
      address: 'Hicksville, OH 43526',
      contact_number: '+1 (760)-377-6613',
      email: 'agencesaarp@gmail.com'
    },
    recipient: {
      name: 'Mark Blanshan',
      address: '521 McPherson st Boone Iowa  50036',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/fq346r83r44r938r398534984',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Money',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Ohio',
      destination: 'Boone, Iowa',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-09-20',
    package_received_time: '12:00:00',
    in_transit_date: '2024-09-21',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-10-02',
    estimated_delivery_time: '09:00:00',
    pickup_date: '2024-11-04',
    pickup_time: '11:30:00'
  },
  {
    package_id: 'PKG007',
    sender: {
      name: 'Peter Cole',
      address: '7803 South Irvington Ave, Tulsa, Oklahoma 74136',
      contact_number: '***-****-****',
      email: '******'
    },
    recipient: {
      name: 'Gustav Jan-Erik Bjon',
      address: 'Harju 55-211612 Tallinn, Estonia',
      contact_number: '***-****-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025637',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Money Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Oklahoma',
      destination: 'Tallinn, Estonia',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-10-17',
    package_received_time: '09:00:00',
    in_transit_date: '2024-10-17',
    in_transit_time: '11:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '2024-10-18',
    on_hold_time: '12:15:00',
    estimated_delivery_date: '2024-10-19',
    estimated_delivery_time: '15:00:00',
   
  },
  {
    package_id: 'PKG008',
    sender: {
      name: 'IDA GRANT',
      address: 'Fayetteville, Arkansas ',
      contact_number: '***-****-****',
      email: 'idagrant2024@gmail.com'
    },
    recipient: {
      name: 'Beth Cutrell ',
      address: '1215 S. Brady St. Accita Indiana 47918',
      contact_number: '***-****-****',
      email: 'bethcutrell@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025638',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Money Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Oklahoma',
      destination: 'Tallinn, Estonia',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-10-17',
    package_received_time: '09:00:00',
    in_transit_date: '2024-10-17',
    in_transit_time: '11:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '2024-10-18',
    on_hold_time: '12:15:00',
    estimated_delivery_date: '2024-10-19',
    estimated_delivery_time: '15:00:00',
  }
];
