class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T, next: Node<T> | null) {
    this.value = value
    this.next = next
  }
}

class LinkedList<T> {

  head: Node<T> | null = null

  push(value: T) {
    this.head = new Node(value, this.head)
  }

  pop(): T {
    const head = this.head
    if (head === null) throw new Error()
    this.head = head.next
    return head.value
  }

  shift(): T {
    let head = this.head
    if (!head) throw new Error()

    if (!head.next) {
      if (!head.value) throw new Error()

      this.head = null
      return head.value
    }
    let tail = head.next
    while (tail.next !== null) {
      head = tail
      tail = tail.next
    }
    head.next = null
    return tail.value
  }

  unshift(value: T) {
    const node = new Node(value, null)

    let head = this.head
    if (head === null) {
      this.head = node
      return
    }

    while (head.next !== null) {
      head = head?.next
    }
    head.next = node
  }

  count(): number {
    let counter = 0
    let head = this.head
    while (head !== null) {
      head = head.next
      counter++
    }
    return counter
  }

  delete(value: T) {
    let head = this.head
    if (head === null) return
    if (head.value === value) this.head = head.next
    while (head.next !== null) {
      if (head.next.value !== value) {
        head = head?.next
      } else {
        head.next = head.next.next
      }
    }
  }
}

export default LinkedList
