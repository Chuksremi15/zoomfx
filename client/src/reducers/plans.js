import {
  ADD_PLAN,
  GET_PLAN,
  GET_PLANS,
  GET_PLANS_PENDINGPLANS,
  GET_PLANS_ACTIVEPLANS,
  GET_PLANS_DUEPLANS,
  GET_PLANS_PAIDDEPOSITE,
  GET_PLANS_PAIDWITHDRAWAL,
  DELETE_PLAN,
  UPDATE_PLAN,
  PLAN_ERROR,
  GET_PLANS_PENDINGWITHDRAWALS,
  UPDATE_PENDING_WITHDRAWAL,
} from '../actions/types';

const initialState = {
  plan: {},
  plans: {},
  pendingPlans: {},
  activePlans: {},
  duePlans: {},
  paidDeposites: {},
  paidWithdrawals: {},
  pendingwithdrawals: {},
  loading: true,
  planLoading: true,
  userPlansByadmin: true,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_PLAN:
      return {
        ...state,
        plan: payload,
        planLoading: true,
      };
    case UPDATE_PLAN:
      return {
        ...state,
        plan: payload,
        planloading: false,
      };
    case UPDATE_PENDING_WITHDRAWAL:
      return {
        ...state,
        plan: payload,
        planloading: false,
      };
    case DELETE_PLAN:
      return {
        ...state,
        plan: {},
        planLoading: true,
      };

    case GET_PLAN:
      return {
        ...state,
        plan: payload,
        planLoading: false,
      };

    case GET_PLANS:
      return {
        ...state,
        plans: payload,
        userPlansByadmin: false,
      };
    case GET_PLANS_PENDINGPLANS:
      return {
        ...state,
        pendingPlans: payload.data.filter((plan) => plan.pendingplan === true),
        loading: false,
      };
    case GET_PLANS_ACTIVEPLANS:
      return {
        ...state,
        activePlans: payload.data.filter((plan) => plan.activeplan === true),
        loading: false,
      };
    case GET_PLANS_DUEPLANS:
      return {
        ...state,
        duePlans: payload.data.filter((plan) => plan.dueplan === true),
        loading: false,
      };
    case GET_PLANS_PAIDDEPOSITE:
      return {
        ...state,
        paidDeposites: payload.data.filter(
          (plan) => plan.paiddeposite === true
        ),
        loading: false,
      };
    case GET_PLANS_PAIDWITHDRAWAL:
      return {
        ...state,
        paidWithdrawals: payload.data.filter(
          (plan) => plan.paidwithdrawal === true
        ),
        loading: false,
      };
    case GET_PLANS_PENDINGWITHDRAWALS:
      return {
        ...state,
        pendingwithdrawals: payload.data.filter(
          (plan) => plan.pendingwithdrawal === true
        ),
        loading: false,
      };
    case PLAN_ERROR:
      return {
        ...state,
        plan: {},
        plans: {},
        loading: false,
      };

    default:
      return state;
  }
}
