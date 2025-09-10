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
    tracking_number: 'sample',
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
    tracking_number: 'Fedex/USA/24/00256302',
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
    estimated_delivery_time: '15:00:00'
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
      packages: 'Brown Envelope',
      quantity: '1',
      paymentMode: 'BTC',
      origin: 'Arkansas, USA',
      destination: '1215 S. Brady St. Accita Indiana 47918',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-12-04',
    package_received_time: '09:00:00',
    in_transit_date: '2024-12-08',
    in_transit_time: '11:00:00',
    out_for_delivery_date: '2024-12-08',
    out_for_delivery_time: '12:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2024-12-09',
    estimated_delivery_time: '15:00:00'
  },
  {
    package_id: 'PKG009',
    sender: {
      name: 'Health and Human Services Veteran Affairs.',
      address: 'Fayetteville, Arkansas ',
      contact_number: '253-500-6070',
      email: 'attorney.david.anderson.010@gmail.com'
    },
    recipient: {
      name: 'Harry E Meyer',
      address: 'Zolfo Springs,  3014 Spruce Street Fl 33890, Florida',
      contact_number: '863-8325-248',
      email: 'meyerh419@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025639',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: ' FedEx Medium Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Washington, USA',
      destination: 'Zolfo Springs, Florida',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2024-12-16',
    package_received_time: '12:00:00',
    in_transit_date: '2024-12-16',
    in_transit_time: '13:00:00',
    out_for_delivery_date: '',
    out_for_delivery_time: '',
    on_hold_date: '2024-12-27',
    on_hold_time: '10:00:00',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG010',
    sender: {
      name: 'Probate Court (James Fletcher)',
      address: 'San Antonio, Tx, USA',
      contact_number: '346-648-8430',
      email: 'jimgrah9@gmail.com'
    },
    recipient: {
      name: 'Lynn Nolan Bishop',
      address: '67 W 300 N, Manti UT 84642',
      contact_number: '***-***-***',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025640',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gold',
      quantity: '5',
      paymentMode: 'Cash',
      origin: 'San Antonio, Tx, USA',
      destination: 'Utah, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-01-25',
    package_received_time: '08:00:00',
    in_transit_date: '2025-01-26',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-01-26',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-01-28',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG011',
    sender: {
      name: 'US ARMY (Sergeant JANICE retirement funds)',
      address: 'Forte Hunter ligget California',
      contact_number: '+1-240-903-0063',
      email: 'brookwoodjanice60@gmail.com'
    },
    recipient: {
      name: 'KALAULI ALEXANDER',
      address: '656 AUEAIOLIMU ST HONOLULU, HI 96813',
      contact_number: '+1-808-563-6454',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025641',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Bag of Money',
      quantity: '1',
      paymentMode: 'Cashapp',
      origin: 'California, USA',
      destination: 'Hawaii, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-01-31',
    package_received_time: '11:12:00',
    in_transit_date: '2025-02-01',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-01',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-02-05',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG012',
    sender: {
      name: 'Old Mutual Insurance Company',
      address: 'Johannesburg South African',
      contact_number: '+1-213-809-4188',
      email: 'insuranceafricaofficialgovernm@gmail.com'
    },
    recipient: {
      name: 'Marilyn Goldberg',
      address: '129 Lakeland Avenue Sayville NY 11782-1995',
      contact_number: '+1-***-***-****',
      email: 'wesleyhatton232@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025642',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase',
      quantity: '2',
      paymentMode: 'Cash & houses keys',
      origin: 'USA',
      destination: '129 Lakeland Avenue Sayville NY 11782-1995',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Ship',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-02-07',
    package_received_time: '09:12:00',
    in_transit_date: '2025-02-25',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-26',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-03-03',
    estimated_delivery_time: '09:00:00'
  },
  {
    package_id: 'PKG013',
    sender: {
      name: 'Blinks Insurance Company',
      address: 'Miami, FL',
      contact_number: '+1-507-262-6200',
      email: '******'
    },
    recipient: {
      name: 'Tamara McKee',
      address: '18314 sw 135th Terrace Tualatin Oregon 97062',
      contact_number: '503****',
      email: 'Tami******gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025643',
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
      paymentMode: 'Cash App',
      origin: 'Portland',
      destination: 'Oregon USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-02-22',
    package_received_time: '09:12:00',
    in_transit_date: '2025-02-23',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-02-23',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '',
    on_hold_time: '',
    estimated_delivery_date: '2025-02-27',
    estimated_delivery_time: '19:00:00'
  },
  {
    package_id: 'PKG014',
    sender: {
      name: 'PCH',
      address: '6901 Jericho Tpke, Syosset, New York',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Dave Van Grouw',
      address: '606 3rd Ave Alton Iowa 51003',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025644',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'New York, USA',
      destination: 'Alton Iowa, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-03-08',
    package_received_time: '09:12:00',
    in_transit_date: '2025-03-09',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2025-03-10',
    out_for_delivery_time: '13:00:00',
    on_hold_date: '2025-03-11',
    on_hold_time: '14:00:00',
    on_hold_desc: 'Your package is currently on hold. A payment of $1,750 is required to proceed with the delivery. Please complete the payment at your earliest convenience to ensure prompt delivery',
    estimated_delivery_date: '2025-03-20',
    estimated_delivery_time: '16:00:00'
  },
  {
    package_id: 'PKG015',
    sender: {
      name: 'James Hollet',
      address: 'Los Angeles, CA, USA',
      contact_number: '304303**',
      email: 'jamesh@gmail.com'
    },
    recipient: {
      name: 'Troy Cowles',
      address: '1443 Raleigh Wilson Road Bowling Green Kentucky 42101',
      contact_number: '364203**',
      email: 'troycowles@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025615',
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
      origin: 'Los Angeles, CA, USA',
      destination: '1443 Raleigh Wilson Road Bowling Green Kentucky 42101',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-05',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-05',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-06',
    out_for_delivery_time: '10:21:00',
    on_hold_date: '2025-04-07',
    on_hold_time: '13:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG016',
    sender: {
      name: 'Smart insurance company',
      address: 'Llandennis Ave, Cardiff CF43 6JJ, UK',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Robert nuernberger',
      address: '5211 East Commerce Avenue Spokane WA 99212',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025616',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Metallic trunk box, bag of money',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Cardiff',
      destination: 'Spokane WA 99212',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-10',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-10',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-21',
    out_for_delivery_time: '10:21:00',
    on_hold_date: '2025-04-21',
    on_hold_time: '13:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-04-21',
    estimated_delivery_time: '13:00:00'
  },
  {
    package_id: 'PKG017',
    sender: {
      name: 'International Development Association program',
      address: '******',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'PATRICK B.',
      address: '204 Main St  Po Box 133 Idaho city Idaho 83163',
      contact_number: '307690***',
      email: 'patrickb******@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025617',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Cartons',
      quantity: '2',
      paymentMode: 'Cash',
      origin: 'Washington DC, USA',
      destination: '204 Main st , Idaho city, 83163',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-15',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-15',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-16',
    out_for_delivery_time: '08:30:00',
    on_hold_date: '2025-04-16',
    on_hold_time: '16:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '',
    estimated_delivery_time: ''
  },
  {
    package_id: 'PKG018',
    sender: {
      name: 'David Alex',
      address: '******',
      contact_number: '762-702-5737',
      email: '******'
    },
    recipient: {
      name: 'Kooi Tan',
      address: '6/39 Holyrood Street, Hampton Vicoria 3188 Australia ',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025618',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase and Tesla car',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'USA',
      destination: 'Australia',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-23',
    package_received_time: '08:12:00',
    in_transit_date: '2025-04-24',
    in_transit_time: '09:05:00',
    out_for_delivery_date: '2025-04-25',
    out_for_delivery_time: '08:30:00',
    on_hold_date: '2025-04-25',
    on_hold_time: '14:25:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-04-25',
    estimated_delivery_time: '14:25:00'
  },
  {
    package_id: 'PKG019',
    sender: {
      name: 'Trust Wallet',
      address: '156 2nd street, San Francisco. CA. 94105. USA',
      contact_number: '***-***-****',
      email: 'smithhelpt2314@gmail.com'
    },
    recipient: {
      name: 'Sharon D. little',
      address: '2203 22nd Street North Columbus, MS 39701',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025619',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Box of Cash',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'San Francisco. CA. 94105. USA',
      destination: 'Columbus, MS 39701',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-27',
    package_received_time: '08:00:00',
    in_transit_date: '2025-04-28',
    in_transit_time: '09:00:00',
    out_for_delivery_date: '2025-04-29',
    out_for_delivery_time: '12:00:00',
    on_hold_date: '2025-05-01',
    on_hold_time: '21:30:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-02',
    estimated_delivery_time: '14:00:00'
  },
  {
    package_id: 'PKG020',
    sender: {
      name: 'Roger Smith',
      address: 'FedEx Office, Des Moines, IA 50319',
      contact_number: '(253) 243-4762',
      email: 'smithhelpt2314@gmail.com'
    },
    recipient: {
      name: 'Joan Johnson',
      address: '327 Green Ave, Carneys Point, NJ 08069.',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025620',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Cash Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Penns Grove NJ, United States',
      destination: 'Carneys Point, NJ 08069',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-25',
    package_received_time: '08:00:00',
    in_transit_date: '2025-04-27',
    in_transit_time: '09:00:00',
    out_for_delivery_date: '2025-04-29',
    out_for_delivery_time: '07:00:00',
    on_hold_date: '',
    // 2025-04-30
    on_hold_time: '',
    // 11:00:00
    on_hold_desc: '',
    estimated_delivery_date: '2025-04-29',
    estimated_delivery_time: '17:45:00'
  },
  {
    package_id: 'PKG021',
    sender: {
      name: 'Vera Dijkman',
      address: 'Koninginneweg 167 1075 CN, Amsterdam, North Holland,  Netherlands',
      contact_number: '+1-727-604-0953',
      email: 'dijkmansv809@gmail.com'
    },
    recipient: {
      name: 'Donald Walker',
      address: '5408 West Cold Spring Road Greenfield, Wisconsin. 53220',
      contact_number: '+1-414-690-3730',
      email: 'cinniwalk.dw@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025621',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Red Cross',
      packages: 'Bag',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'USA',
      destination: 'Greenfield Wisconsin',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-04-23',
    package_received_time: '08:00:00',
    in_transit_date: '2025-05-02',
    in_transit_time: '09:00:00',
    out_for_delivery_date: '2025-05-05',
    out_for_delivery_time: '08:00:00',
    on_hold_date: '2025-05-03',
    on_hold_time: '09:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-05',
    estimated_delivery_time: '17:45:00'
  },
  {
    package_id: 'PKG022',
    sender: {
      name: 'Amanda April Johnson',
      address: '306 Iredell County, Statesville, North Carolina 28625',
      contact_number: '+1-317-352-10763',
      email: 'amandaj198007@gmail.com'
    },
    recipient: {
      name: 'John C Fletcher',
      address: ' 1631 Colt Dr, Henderson, Nevada, USA 89002',
      contact_number: '+1-725-303-2749',
      email: 'sg198007@gmail.com'
    },
    tracking_number: 'Fedex/USA/24/0025622',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Cash Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'North Carolina, USA',
      destination: 'Nevada, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-01',
    package_received_time: '08:00:00',
    in_transit_date: '2025-05-05',
    in_transit_time: '09:00:00',
    out_for_delivery_date: '2025-05-10',
    out_for_delivery_time: '08:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-10',
    estimated_delivery_time: '17:45:00'
  },
  {
    package_id: 'PKG023',
    sender: {
      name: 'DEBORAH BULL',
      address: '546 NW Skyline Dr, Toledo OR 97391',
      contact_number: '509769****',
      email: 'debor****06@gmail.com'
    },
    recipient: {
      name: ' Bonnie Coleman Beth',
      address: '8327 W Tidwell Rd Apt 1702 Houston, TX 77040-5572',
      contact_number: '707797****',
      email: 'Bonnie.****an@ymail.com '
    },
    tracking_number: 'Fedex/USA/24/0025623',
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
      origin: 'Toledo, Ohio USA',
      destination: 'Houston, TX USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-08',
    package_received_time: '04:00:00',
    in_transit_date: '2025-05-08',
    in_transit_time: '07:00:00',
    out_for_delivery_date: '2025-05-08',
    out_for_delivery_time: '09:30:00',
    on_hold_date: '2025-05-08',
    on_hold_time: '20:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-08',
    estimated_delivery_time: '23:00:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG024',
    sender: {
      name: 'Seven Gallery',
      address: '2200 NW 2nd Ave, 33127 Miami FL',
      contact_number: '***-***-****',
      email: '******'
    },
    recipient: {
      name: 'Elena Cannon',
      address: '1 Central Park west, Apt 38B, New York, NY 10023',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025624',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gift Item',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'FL, USA',
      destination: 'NY, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-21',
    package_received_time: '04:00:00',
    in_transit_date: '2025-05-21',
    in_transit_time: '07:00:00',
    out_for_delivery_date: '2025-05-23',
    out_for_delivery_time: '01:30:00',
    on_hold_date: '2025-05-23',
    on_hold_time: '20:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-23',
    estimated_delivery_time: '22:00:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG025',
    sender: {
      name: 'Micheal Anderson',
      address: '199 Old Maids Ln Glastonbury, Connecticut, USA 06073',
      contact_number: '***-***-****',
      email: '******'
    },
    recipient: {
      name: 'Daisy Baptista',
      address: '218 broad St Apt 8L Staten Island NY 10304',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/24/0025625',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Briefcase #8910',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Connecticut, USA',
      destination: 'NY, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-23',
    package_received_time: '19:35:00',
    in_transit_date: '2025-05-26',
    in_transit_time: '21:00:00',
    out_for_delivery_date: '2025-05-29',
    out_for_delivery_time: '14:00:00',
    on_hold_date: '2025-05-30',
    on_hold_time: '22:00:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-05-30',
    estimated_delivery_time: '22:35:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG026',
    sender: {
      name: 'Jeffrey Thomas hanks',
      address: '******',
      contact_number: '***-***-****',
      email: 'thmhanksjeff01003@gmail.com'
    },
    recipient: {
      name: 'Harriette schutsch',
      address: '4348 ridgedale avenue Las Vegas NV 89121',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: '673456789102',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Envelope',
      quantity: '2',
      paymentMode: 'Credit Card',
      origin: 'England, UK',
      destination: 'Las Vegas, NV, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'International Shipping',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-05-26',
    package_received_time: '19:35:00',
    in_transit_date: '2025-05-27',
    in_transit_time: '21:00:00',
    out_for_delivery_date: '2025-06-03',
    out_for_delivery_time: '14:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: 'On hold in the fedex facility center, Las Vegas, Nevada',
    estimated_delivery_date: '2025-06-30',
    estimated_delivery_time: '23:35:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG027',
    sender: {
      name: 'Ronald rahne',
      address: '1500 Marilla St, Dallas, TX 75201',
      contact_number: '***-***-****',
      email: '******'
    },
    recipient: {
      name: 'Kay kennel Tarango',
      address: '2270 S 1100 W G 103 West Haven UT 84401, US',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: 'Fedex/USA/25/0025627',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Dallas, TX, USA',
      destination: 'West Haven, UT, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-06-04',
    package_received_time: '10:00:00',
    in_transit_date: '2025-06-05',
    in_transit_time: '07:30:00',
    out_for_delivery_date: '2025-06-07',
    out_for_delivery_time: '04:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-06-27',
    estimated_delivery_time: '01:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG028',
    sender: {
      name: 'WILSON RASFORD',
      address: '',
      contact_number: '***-***-****',
      email: 'officialwilsonrasford@gmail.com'
    },
    recipient: {
      name: 'DAISY LYNNE GREGORY ',
      address: '1433 Franklin St Enumclaw, Washington 98022',
      contact_number: '***-***-****',
      email: '******'
    },
    tracking_number: '673456789028',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'White House Faith Based And Neighborhood Partnerships Winning Money',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Arkansas, USA',
      destination: 'Washington, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-06-07',
    package_received_time: '14:00:00',
    in_transit_date: '2025-06-07',
    in_transit_time: '20:00:00',
    out_for_delivery_date: '2025-06-07',
    out_for_delivery_time: '21:30:00',
    on_hold_date: '2025-06-07',
    on_hold_time: '23:30:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-06-08',
    estimated_delivery_time: '00:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG029',
    sender: {
      name: 'Military Transit System',
      address: 'Fort liberty North Carolina',
      contact_number: '+1-909-901-3322',
      email: 'ftlusa25l021@gmail.com'
    },
    recipient: {
      name: 'KiJan Keita Coryaba',
      address: '1155 Woodsedge Road Dover Delaware 19904',
      contact_number: '302-415-5056',
      email: 'kijancoryaba1@gmail.com'
    },
    tracking_number: '673456789029',
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
      origin: 'North Carolina, USA',
      destination: 'Delaware, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-06-12',
    package_received_time: '14:00:00',
    in_transit_date: '2025-06-12',
    in_transit_time: '20:00:00',
    out_for_delivery_date: '2025-07-28',
    out_for_delivery_time: '15:00:00',
    on_hold_date: '2025-07-28',
    on_hold_time: '23:30:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-07-29',
    estimated_delivery_time: '00:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG030',
    sender: {
      name: 'Fedex',
      address: '6900 Presidents Dr, Orlando, FL 32809',
      contact_number: '+1-541-250-****',
      email: '*******'
    },
    recipient: {
      name: 'Ursina Naef',
      address: '4606 Rollando Drive, Rolling Hills Estates, CA 90274',
      contact_number: '+1-310-420-****',
      email: '*******'
    },
    tracking_number: 'Fedex/USA/25/0025630',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Treasure Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Florida, USA',
      destination: 'California, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-07-29',
    package_received_time: '14:00:00',
    in_transit_date: '2025-07-30',
    in_transit_time: '11:30:00',
    out_for_delivery_date: '2025-07-31',
    out_for_delivery_time: '15:00:00',
    on_hold_date: '2025-08-01',
    on_hold_time: '15:30:00',
    on_hold_desc: '',
    estimated_delivery_date: '2025-08-03',
    estimated_delivery_time: '02:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG031',
    sender: {
      name: 'Jessica Kellogg',
      address: '11207 BROADWATER BRIDGE ROSEBORO, NC 28382-8542',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Samuel Denduaw',
      address: '6781 hwy 42 Tenmile OREGON 974811',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/25/0025631',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Roseboro, NC',
      destination: 'Tenmile, OR',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-08-16',
    package_received_time: '15:00:00',
    in_transit_date: '2025-08-18',
    in_transit_time: '14:30:00',
    out_for_delivery_date: '2025-08-21',
    out_for_delivery_time: '15:00:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: '',
    estimated_delivery_date: '2025-08-21',
    estimated_delivery_time: '23:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG032',
    sender: {
      name: 'Charles Woodley',
      address: 'Minneapolis, Minnesota (MSP)',
      contact_number: '626--**',
      email: '******'
    },
    recipient: {
      name: 'Leopold baricar',
      address: '91-1021 Makahani Street, Kapolei, Hawaii 96707',
      contact_number: '808--**',
      email: '******'
    },
    tracking_number: 'Fedex/USA/25/0025635',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Cash Box',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Minneapolis, MN',
      destination: 'Kapolei, HI',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Road',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-08-13',
    package_received_time: '14:00:00',
    in_transit_date: '2025-08-13',
    in_transit_time: '16:30:00',
    out_for_delivery_date: '2025-08-13',
    out_for_delivery_time: '20:00:00',
    on_hold_date: '2025-08-13',
    on_hold_time: '23:30:00',
    on_hold_desc: 'Package on hold due to customs clearance.',
    estimated_delivery_date: '2025-08-14',
    estimated_delivery_time: '01:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG033',
    sender: {
      name: 'Richard Scott',
      address: '110, jasim Mohamed Al Bahar St, Kuwait City, Kuwait',
      contact_number: '+96579*****',
      email: '******'
    },
    recipient: {
      name: 'Phyllis Cox',
      address: '4600 w 9th Ave Denver Colorado 80204',
      contact_number: '******',
      email: 'tafoyagloria76@gmail.com'
    },
    tracking_number: 'Fedex/USA/25/0025636',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'File',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'Kuwait City, Kuwait',
      destination: 'Denver, Co, USA',
      comment: 'Handle with care',
      status: 'Out for delivery',
      mode: 'Air',
      value_usd: 50.0
    },
    // Y-M-D
    package_received_date: '2025-08-19',
    package_received_time: '14:00:00',
    in_transit_date: '2025-08-20',
    in_transit_time: '20:00:00',
    out_for_delivery_date: '2025-08-22',
    out_for_delivery_time: '14:30:00',
    on_hold_date: '2025-08-21',
    on_hold_time: '21:00:00',
    on_hold_desc: 'Package on hold due to customs clearance.',
    estimated_delivery_date: '2025-08-22',
    estimated_delivery_time: '23:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG034',
    sender: {
      name: 'Horgey Rodney',
      address: '35949 HIBBELN RD, ONTONAGON MICHIGAN 49953',
      contact_number: '626-555-****',
      email: '******'
    },
    recipient: {
      name: 'Malcolm Baggett',
      address: '8909 Neptune Dr. Cincinnati, Ohio 45231',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/25/0025650',
    package_details: {
      weight_kg: 10,
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
    },
    // Y-M-D
    package_received_date: '2025-08-25',
    package_received_time: '20:00:00',
    in_transit_date: '2025-08-28',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2025-08-28',
    out_for_delivery_time: '16:30:00',
    on_hold_date: '2025-08-28',
    on_hold_time: '22:00:00',
    on_hold_desc: 'Package on hold due to customs clearance.',
    estimated_delivery_date: '2025-08-28',
    estimated_delivery_time: '23:30:00',
    time_zone: 'America/Chicago'
  },
  {
    package_id: 'PKG035',
    sender: {
      name: 'Mark Smith',
      address: '******',
      contact_number: '******',
      email: '******'
    },
    recipient: {
      name: 'Dani Jensen',
      address: '3337 RT 332 Williamsfield OH 44093',
      contact_number: '******',
      email: '******'
    },
    tracking_number: 'Fedex/USA/25/0025651',
    package_details: {
      weight_kg: 10,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'Fedex',
      packages: 'Gold Bars',
      quantity: 'KG',
      paymentMode: 'Cash',
      origin: 'Hamburg, DE',
      destination: 'Williamsfield, OH',
      comment: 'Handle with care',
      mode: 'Road',
    },
    // Y-M-D
    package_received_date: '2025-09-09',
    package_received_time: '16:00:00',
    in_transit_date: '2025-09-11',
    in_transit_time: '14:00:00',
    out_for_delivery_date: '2025-10-08',
    out_for_delivery_time: '15:30:00',
    on_hold_date: '',
    on_hold_time: '',
    on_hold_desc: 'Package on hold due to customs clearance.',
    estimated_delivery_date: '2025-10-08',
    estimated_delivery_time: '23:30:00',
    time_zone: 'America/Chicago'
  }
];
