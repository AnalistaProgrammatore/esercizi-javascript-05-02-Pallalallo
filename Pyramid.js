let x, y = 0; z = ''
for (i = 0; i <= 6; i++) {
    for (y = 0; y <= i; y++) {
        z = z + `# `;
        console.log(z)
    }
    console.log('\n')
    z = ''
}