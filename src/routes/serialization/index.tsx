import { component$ } from '@builder.io/qwik';

export const topLevel = Promise.resolve('nonserializable data');

export class MyCustomClass {
  val: string;

  constructor(val: string) {
    this.val = val;
  }
}

export default component$(() => {
  // BEGIN component serialization boundary

  // Referring to top level symbols that are exported is always allowed.
  console.log(topLevel); // OK

  const captureSerializable = 'serializable data';
  const capturePromise = Promise.resolve('Qwik serializes promises');
  // Instances of custom classes are not serializable.
  // const captureNonSerializable = new MyCustomClass('non serializable'); // RUNTIME ERROR

  return (
    <button
      onClick$={() => {
        // BEGIN onClick serialization boundary

        // Referring to top level symbols that are exported is always allowed,
        // even if the value is non-serializable.
        console.log(topLevel); // OK

        // Capturing a non-top-level variable is allowed only if:
        // - declared as `const`
        // - is serializable (runtime error)
        console.log(captureSerializable); // OK
        console.log(capturePromise); // OK

        // Referring to captureNonSerializable will pass static analysis but
        // will fail at runtime because Qwik does not know how to serialize it.
        // console.log(captureNonSerializable); // RUNTIME ERROR

        // END onClick serialization boundary
      }}
    >
      click
    </button>
  );
  // END component serialization boundary
});
