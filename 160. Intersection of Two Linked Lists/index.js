// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

const getIntersectionNode = (headA, headB) => {
	if (!headA || !headB) return null;

	let nowA = headA;
	let nowB = headB;

	while (nowA !== nowB) {
		nowA = nowA ? nowA.next : headB;
		nowB = nowB ? nowB.next : headA;
	}

	return nowA;
};
