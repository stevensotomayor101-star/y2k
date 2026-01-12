
export enum ManiFantasy {
  GIMME_GLITZ = 'Gimme Glitz!',
  POP_PRINCESS = 'Pop Princess Pastel',
  HOT_FIRE = 'Hot-Fire Flames'
}

// Added Salon interface to define nail salon data structure
export interface Salon {
  name: string;
  description: string;
  uri?: string;
}

export interface NailDesign {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface BookingState {
  step: 'form' | 'confirmed';
  customerName: string;
  email: string;
  date: string;
  description: string;
}
