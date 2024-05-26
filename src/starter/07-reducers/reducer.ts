export const initialState: CounterState = {
	count: 0,
	status: "pending",
};

type CounterState = {
	count: number;
	status: string;
};

type UpdateCouterAction = {
	type: "increment" | "decrement" | "reset";
};
type UpdateStatusAction = {
	type: "setStatus" | "hhh";
	payload: "active" | "inactive";
};

type ActionType = UpdateCouterAction | UpdateStatusAction;
export const counterReducer = (state: CounterState, action: ActionType): CounterState => {
	if (action.type === "increment") {
		return { ...state, count: state.count + 1 };
	}
	if (action.type === "decrement") {
		return { ...state, count: state.count - 1 };
	}
	if (action.type === "reset") {
		return { ...state, count: 0, status: "Pending" };
	}
	if (action.type === "setStatus") {
		return { ...state, status: action.payload };
	}
	// throw new Error("wrong type check the reduer funtion");
	return state;
};
