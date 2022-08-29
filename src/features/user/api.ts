import { userData } from "../../app/fakedata";

// A mock function to mimic making an async request for data
export function fetchCount(user = userData ) {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: user }), 500)
  );
}
