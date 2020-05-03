if(!lists || lists.length < 1) return null
if(lists.length == 1) return lists[0]

let mergeTwoList = function(a,b) {
    let i = a
    let j = b
    let res = new ListNode('tmp')
    let cur = res
    
    while(i && j) { 
        if(i.val <= j.val){
            cur.next = new ListNode(i.val)
            i = i.next
        } else {
            cur.next = new ListNode(j.val)
            j = j.next
        }
        cur = cur.next
    }
    
    while(i){
        cur.next = new ListNode(i.val)
        cur = cur.next
        i = i.next
    } 
    while(j) {
        cur.next = new ListNode(j.val)
        cur = cur.next
        j = j.next
    }
    return res.next
}

let curLists = lists;
while(curLists.length > 1){
    let n = curLists.length, i = 0, j = n-1
    let newLists = []
    while(i<=j){
        if(i== j) {
            newLists.push(curLists[i])
        } else {
            let newList = mergeTwoList(curLists[i], curLists[j])
            newLists.push(newList)
        }
        i++
        j--
    }
    curLists = newLists
}
return curLists[0]
};