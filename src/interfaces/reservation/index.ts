import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  start_date: any;
  end_date: any;
  tool_id: string;
  outlet_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  outlet?: OutletInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  outlet_id?: string;
  customer_id?: string;
}
