export const formatDate = (time: string) => {
	//   return new Date().toLocaleDateString();
	const event = new Date(time);
	const date = event.toDateString();
	return date;
};
