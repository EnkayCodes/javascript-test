/**
 * CALCULATION FUNCTIONS TEST SUITE
 * 
 * This file contains automated tests for all calculation functions.
 * Run this file to verify your implementations are working correctly.
 * 
 * USAGE:
 * Node.js: node calculation-functions-test.js
 * Browser: Load both files and call runAllTests() in console
 * 
 * TEST RESULTS:
 * ✅ = Test passed
 * ❌ = Test failed
 * 📊 = Summary statistics
 */

// Import the functions to test
let functions;
if (typeof require !== 'undefined') {
    // Node.js environment
    functions = require('./calculation-function.js');
} else {
    // Browser environment
    functions = window.CalculationFunctions;
}

// Extract functions for easier testing
const {
    sampleTransactions,
    calculateTotalIncome,
    calculateTotalExpenses,
    calculateNetBalance,
    calculateSpendingByCategory,
    calculateAverageTransaction,
    findLargestExpense,
    calculateSavingsRate,
    getMonthSummary,
    findTransactionsAboveAmount,
    calculateMonthOverMonthGrowth,
    getTopSpendingCategories
} = functions;

// ============================================================================
// TEST UTILITIES
// ============================================================================

let testResults = {
    passed: 0,
    failed: 0,
    total: 0
};

/**
 * Test assertion function
 * @param {string} testName - Name of the test
 * @param {*} actual - Actual result
 * @param {*} expected - Expected result
 * @param {string} description - Test description
 */
function test(testName, actual, expected, description = '') {
    testResults.total++;
    
    let passed = false;
    
    // Handle different types of comparisons
    if (typeof expected === 'object' && expected !== null) {
        if (Array.isArray(expected)) {
            passed = JSON.stringify(actual) === JSON.stringify(expected);
        } else {
            passed = deepEqual(actual, expected);
        }
    } else if (typeof expected === 'number') {
        // Handle floating point precision
        passed = Math.abs(actual - expected) < 0.01;
    } else {
        passed = actual === expected;
    }
    
    if (passed) {
        testResults.passed++;
        console.log(`✅ ${testName}: ${description}`);
    } else {
        testResults.failed++;
        console.log(`❌ ${testName}: ${description}`);
        console.log(`   Expected: ${JSON.stringify(expected)}`);
        console.log(`   Actual: ${JSON.stringify(actual)}`);
    }
}

/**
 * Deep equality check for objects
 * @param {*} a - First object
 * @param {*} b - Second object
 * @returns {boolean} True if objects are deeply equal
 */
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a !== typeof b) return false;
    
    if (typeof a === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        
        if (keysA.length !== keysB.length) return false;
        
        for (let key of keysA) {
            if (!keysB.includes(key)) return false;
            if (!deepEqual(a[key], b[key])) return false;
        }
        
        return true;
    }
    
    return false;
}

/**
 * Test if a function throws an error or returns a default value
 * @param {Function} fn - Function to test
 * @param {*} defaultValue - Expected default value
 * @returns {*} Result of function call
 */
function testSafely(fn, defaultValue) {
    try {
        return fn();
    } catch (error) {
        return defaultValue;
    }
}

// ============================================================================
// EXPECTED RESULTS (CALCULATED MANUALLY)
// ============================================================================

const expectedResults = {
    // January 2024 totals
    jan2024Income: 4500,      // 3500 + 800 + 200
    jan2024Expenses: 2190,    // 1200 + 300 + 150 + 80 + 120 + 250 + 90
    jan2024NetBalance: 2310,  // 4500 - 2190
    jan2024SavingsRate: 51.33, // (2310 / 4500) * 100
    jan2024TransactionCount: 10,
    
    // February 2024 totals
    feb2024Income: 4250,      // 3500 + 600 + 150
    feb2024Expenses: 2075,    // 1200 + 280 + 140 + 75 + 200 + 180
    feb2024NetBalance: 2175,  // 4250 - 2075
    feb2024SavingsRate: 51.18, // (2175 / 4250) * 100
    feb2024TransactionCount: 9,
    
    // March 2024 totals
    mar2024Income: 5000,      // 3500 + 1200 + 300
    mar2024Expenses: 2725,    // 1200 + 320 + 160 + 95 + 150 + 400 + 220 + 180
    mar2024NetBalance: 2275,  // 5000 - 2725
    mar2024SavingsRate: 45.5, // (2275 / 5000) * 100
    mar2024TransactionCount: 11,
    
    // Category breakdowns for January 2024
    jan2024Categories: {
        housing: 1200,
        food: 300,
        utilities: 150,
        transport: 80,
        entertainment: 120,
        shopping: 250,
        healthcare: 90
    },
    
    // Average transactions for January 2024
    jan2024AvgIncome: 1500,   // 4500 / 3
    jan2024AvgExpense: 312.86, // 2190 / 7
    
    // Largest expense for January 2024
    jan2024LargestExpense: {
        id: '4',
        type: 'expense',
        amount: 1200,
        category: 'housing',
        description: 'Monthly Rent',
        date: '2024-01-01'
    }
};

// Test function
function testCalculateTotalIncome() {
    console.log('\n🧮 Testing calculateTotalIncome()...');
    
    test(
        'calculateTotalIncome-Jan2024',
        calculateTotalIncome('2024-01'),
        expectedResults.jan2024Income,
        'January 2024 total income should be $4,500'
    );
    
    test(
        'calculateTotalIncome-Feb2024',
        calculateTotalIncome('2024-02'),
        expectedResults.feb2024Income,
        'February 2024 total income should be $4,250'
    );
    
    test(
        'calculateTotalIncome-Mar2024',
        calculateTotalIncome('2024-03'),
        expectedResults.mar2024Income,
        'March 2024 total income should be $5,000'
    );
    
    test(
        'calculateTotalIncome-NoData',
        calculateTotalIncome('2024-12'),
        0,
        'December 2024 (no data) should return $0'
    );
}


function testFindLargestExpense() {
    console.log('\n🔍 Testing findLargestExpense()...');
    
    test(
        'findLargestExpense-Jan2024',
        findLargestExpense('2024-01'),
        expectedResults.jan2024LargestExpense,
        'January 2024 largest expense should be housing ($1,200)'
    );
    
    test(
        'findLargestExpense-NoData',
        findLargestExpense('2024-12'),
        null,
        'December 2024 (no data) should return null'
    );
    
    // Test March 2024 - should be education ($400)
    const mar2024LargestExpense = {
        id: '28',
        type: 'expense',
        amount: 400,
        category: 'education',
        description: 'Online Course',
        date: '2024-03-18'
    };
    
    test(
        'findLargestExpense-Mar2024',
        findLargestExpense('2024-03'),
        mar2024LargestExpense,
        'March 2024 largest expense should be education ($400)'
    );
}


// Call the test function
testCalculateTotalIncome();
testFindLargestExpense();