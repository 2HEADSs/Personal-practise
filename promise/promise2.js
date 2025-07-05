// console.log('=== Variant 1: finally ➜ catch ===');
// new Promise((_, reject) => reject('⚠️ error'))
//   .finally(() => console.log('🧹 finally (1)'))
//   .catch(err => console.log('❌ catch (1):', err));

// console.log('\n=== Variant 2: catch ➜ finally ===');
// new Promise((_, reject) => reject('⚠️ error'))
//   .catch(err => console.log('❌ catch (2):', err))
//   .finally(() => console.log('🧹 finally (2)'));


  function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Изминаха ${ms} ms`), ms);
    setTimeout(() => reject(`Изминаха ${ms} ms`), ms-1);
  });
}

wait(1000)
  .then((msg) => console.log(msg))          // fulfilled
  .catch((err) => console.error(err))       // rejected
  .finally(() => console.log('Готово!'));   // винаги